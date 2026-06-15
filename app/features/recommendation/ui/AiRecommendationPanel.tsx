import { useMemo, useState } from "react";
import type { BookshelfItem } from "~/entities/bookshelf/model/types";
import { getAiRecommendation } from "../api/getAiRecommendation";
import type { AiRecommendation } from "../model/types";

export function AiRecommendationPanel({ books }: { books: BookshelfItem[] }) {
  const [recommendation, setRecommendation] =
    useState<AiRecommendation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const recommendationBooks = useMemo(
    () =>
      books.map(({ title, author, shelf }) => ({
        title,
        author,
        shelf,
      })),
    [books],
  );

  const finishedCount = recommendationBooks.filter(
    (book) => book.shelf === "read",
  ).length;

  const getRecommendation = async () => {
    setLoading(true);
    setError(null);

    try {
      const nextRecommendation =
        await getAiRecommendation(recommendationBooks);
      setRecommendation(nextRecommendation);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not get an AI recommendation.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            AI recommendation
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Based on your finished shelf
          </p>
        </div>

        <button
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-gray-300"
          disabled={loading || finishedCount === 0}
          onClick={getRecommendation}
          type="button"
        >
          {loading ? "Getting..." : "Get AI recommendation"}
        </button>
      </div>

      {finishedCount === 0 && (
        <p className="mt-4 text-sm text-gray-500">
          Move at least one book to Finished to get a recommendation.
        </p>
      )}

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {recommendation && (
        <div className="mt-4 border-t border-gray-100 pt-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {recommendation.title}
          </h3>
          <p className="text-sm text-gray-500">{recommendation.author}</p>
          <p className="mt-3 text-sm leading-6 text-gray-700">
            {recommendation.reason}
          </p>
        </div>
      )}
    </section>
  );
}
