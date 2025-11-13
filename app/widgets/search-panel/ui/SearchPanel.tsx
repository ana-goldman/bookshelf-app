import SearchBar from "~/features/search/ui/SearchBar";

export function SearchPanel() {
  return (
    <div>
      <SearchBar />
      <div className="random-bookshelf">
        <p>No books available.</p>
      </div>
    </div>
  );
}
