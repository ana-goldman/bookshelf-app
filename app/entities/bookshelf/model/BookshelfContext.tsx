import { createContext, useContext } from "react";
import type { BookshelfContextValue } from "./types";

const BookshelfContext = createContext<BookshelfContextValue | null>(null);

export function useBookshelfContext() {
  const context = useContext(BookshelfContext);
  if (!context) {
    throw new Error(
      "useBookshelfContext must be used within a BookshelfProvider",
    );
  }
  return context;
}

export { BookshelfContext };
