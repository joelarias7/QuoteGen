import type { Quote } from "../types/Quote";

interface QuoteCardProps {
  quote: Quote;
}

function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <article>
      <p>"{quote.text}"</p>
      <p>— {quote.author}</p>
      <p>{quote.category}</p>
    </article>
  );
}

export default QuoteCard;