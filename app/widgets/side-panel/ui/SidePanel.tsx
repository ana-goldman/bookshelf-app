import { useBookCover } from "~/entities/book/model/useBookCover";
import {
  useRandomBooks,
  type Book,
} from "~/entities/book/model/useRandomBooks";
import { BookCardVertical } from "~/entities/book/ui/BookCardVertical";
import SearchBar from "~/features/search/ui/SearchBar";

export function SidePanel() {
  const { data, loading, error } = useRandomBooks();
  const covers = data?.map((book: Book) => useBookCover(book.cover_id, "M"));

  return (
    <div className="md:basis-1/2 w-full">
      <SearchBar />
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex justify-between">
        {loading && <p className="text-xl">Loading...</p>}
        {data &&
          data.map((book: Book) => (
            <BookCardVertical
              key={book.key}
              cover={covers?.[data.indexOf(book)]}
              title={book.title}
              author={book.authors?.[0]?.name || "Unknown Author"}
            />
          ))}
        {error && <p className="text-xl">Error loading books.</p>}
      </div>
    </div>
  );
}
