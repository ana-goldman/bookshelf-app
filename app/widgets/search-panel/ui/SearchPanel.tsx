import { BookCardVertical } from "~/entities/book/ui/BookCardVertical";
import SearchBar from "~/features/search/ui/SearchBar";

export function SearchPanel() {
  return (
    <div className="md:basis-1/2 w-full">
      <SearchBar />
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex justify-between">
        {/* <p>No books available.</p> */}
        <BookCardVertical />
        <BookCardVertical />
        <BookCardVertical />
      </div>
    </div>
  );
}
