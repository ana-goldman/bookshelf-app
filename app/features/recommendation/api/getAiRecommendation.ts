import type {
  AiRecommendation,
  RecommendationBook,
} from "../model/types";

export async function getAiRecommendation(
  books: RecommendationBook[],
): Promise<AiRecommendation> {
  const res = await fetch("/api/recommendation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ books }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error ?? "Failed to get recommendation");
  }

  return data.recommendation;
}
