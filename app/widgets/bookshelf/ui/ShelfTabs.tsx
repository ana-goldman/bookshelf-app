import { ShelfSection } from "./ShelfSection";

export function ShelfTabs() {
  const shelves = ["Currently Reading", "Finished", "Wishlist"];

  return (
    <div>
      {shelves.map((shelf) => (
        <div key={shelf}>
          <h2>{shelf}</h2>
          {/* Placeholder for books in this shelf */}
          <div className="bookshelf">
            {/* <p>No books added yet.</p> */}
            <ShelfSection />
          </div>
        </div>
      ))}
    </div>
  );
}
