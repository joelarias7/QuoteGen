import { useEffect, useState } from "react";
import { getRandomQuote } from "../services/quoteService";
import type { Quote } from "../types/Quote";
import QuoteCard from "./QuoteCard";

interface CategorySectionProps {
  category: string;
}

function CategorySection({ category }: CategorySectionProps) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const data = await getRandomQuote(category);
        setQuote(data);
      } catch (error) {
        console.error(error);
        setError(`Unable to load ${category} quote.`);
      }
    }

    fetchQuote();
  }, [category]);

  return (
    <section>
      <h2>{category}</h2>

      {error && <p>{error}</p>}

      {quote && <QuoteCard quote={quote} />}
    </section>
  );
}

export default CategorySection;