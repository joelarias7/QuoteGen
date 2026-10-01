import type { Quote } from "../types/Quote";

const API_URL = "http://localhost:4000/api/quotes";

export async function getQuoteOfTheDay(): Promise<Quote> {
  const response = await fetch(`${API_URL}/today`);

  if (!response.ok) {
    throw new Error("Failed to fetch Quote of the Day");
  }

  return response.json();
}

export async function getQuotesByCategory(
  category: string
): Promise<Quote[]> {
  const response = await fetch(
    `${API_URL}?category=${encodeURIComponent(category)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category quotes");
  }

  return response.json();
}

export async function getRandomQuote(category: string): Promise<Quote> {
  const response = await fetch(
    `${API_URL}/random?category=${encodeURIComponent(category)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch random quote");
  }

  return response.json();
}