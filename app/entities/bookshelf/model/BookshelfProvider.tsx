import { BookshelfContext } from "./BookshelfContext";
import { useBookshelf } from "./useBookshelf";

export function BookshelfProvider({ children }: { children: React.ReactNode }) {
  const bookshelf = useBookshelf();

  return (
    <BookshelfContext.Provider value={bookshelf}>
      {children}
    </BookshelfContext.Provider>
  );
}
