import { useEffect, useState } from "react";
import { fetchBookshelf } from "../api/bookshelfApi";
import type { BookshelfItem } from "./types";

export function useBookshelf() {
  const [books, setBooks] = useState<BookshelfItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookshelf()
      .then(setBooks)
      .finally(() => setLoading(false));
  }, []);

  return {
    books,
    loading,
  };
}
