import { BookCardHorizontal } from "~/entities/book/ui/BookCardHorizontal";
import type { BookshelfItem } from "~/entities/bookshelf/model/types";

export function ShelfSection({ books }: { books: BookshelfItem[] }) {
  return (
    <div className="mb-8 flex flex-col gap-4">
      {books.map((book) => (
        <BookCardHorizontal key={book.id} book={book} />
      ))}
    </div>
  );
}
