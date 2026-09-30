import { useEffect, useState } from "react";
import { getQuoteOfTheDay } from "../services/quoteService";
import type { Quote } from "../types/Quote";
import QuoteCard from "../components/QuoteCard";
import CategorySection from "../components/CategorySection";

function Home() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const data = await getQuoteOfTheDay();
        setQuote(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load the Quote of the Day.");
      } finally {
        setLoading(false);
      }
    }

    fetchQuote();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>QuoteGen</h1>

      {quote && (
        <section>
          <h2>Quote of the Day</h2>
          <QuoteCard quote={quote} />
        </section>
      )}

      <CategorySection category="Motivation" />
      <CategorySection category="Sad" />
      <CategorySection category="Happy" />
      <CategorySection category="Loving" />
    </main>
  );
}

export default Home;