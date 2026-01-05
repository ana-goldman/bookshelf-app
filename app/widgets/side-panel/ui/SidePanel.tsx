import { getCoverUrl } from "~/entities/book/api/getCoverUrl";
import type { Book } from "~/entities/book/model/types";
import { useRandomBooks } from "~/entities/book/model/useRandomBooks";
import { BookCardVertical } from "~/entities/book/ui/BookCardVertical";
import { useBookshelfActions } from "~/entities/bookshelf/model/useBookshelfActions";
import SearchBar from "~/features/search/ui/SearchBar";

export function SidePanel() {
  const { data, loading, error } = useRandomBooks();
  const { addBook } = useBookshelfActions();

  return (
    <div className="md:basis-1/2 w-full">
      <SearchBar />
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex justify-between">
        {loading && <p className="text-xl">Loading...</p>}
        {data &&
          data.map((book: Book) => (
            <BookCardVertical
              key={book.key}
              cover={getCoverUrl("id", book.cover_id)}
              title={book.title}
              author={book.authors?.[0]?.name || "Unknown Author"}
              onAddToShelf={(shelf) => addBook(book, shelf)}
            />
          ))}
        {error && <p className="text-xl">Error loading books.</p>}
      </div>
    </div>
  );
}
