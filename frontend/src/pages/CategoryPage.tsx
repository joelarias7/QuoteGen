import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuotesByCategory } from "../services/quoteService";
import type { Quote } from "../types/Quote";
import QuoteCard from "../components/QuoteCard";

function CategoryPage() {
  const { category } = useParams();

  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) {
      return;
    }

    async function fetchQuotes() {
      try {
        const data = await getQuotesByCategory(category);
        setQuotes(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load quotes.");
      }
    }

    fetchQuotes();
  }, [category]);

  return (
    <main>
      <h1>{category}</h1>

      {error && <p>{error}</p>}

      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </main>
  );
}

export default CategoryPage;