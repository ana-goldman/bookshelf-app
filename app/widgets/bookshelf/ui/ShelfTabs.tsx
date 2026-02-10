import { ShelfSection } from "./ShelfSection";
import type { Shelf } from "~/entities/bookshelf/model/types";
import { useBookshelfContext } from "~/entities/bookshelf/model/BookshelfContext";

export function ShelfTabs() {
  const shelves = ["Currently Reading", "Finished", "Wishlist"];
  const shelfMap: Record<string, Shelf> = {
    "Currently Reading": "reading",
    Finished: "read",
    Wishlist: "want",
  };

  const { books } = useBookshelfContext();

  console.log(books);

  return (
    <div className="md:basis-1/2 w-full">
      {shelves.map((shelfLabel) => {
        const shelfKey = shelfMap[shelfLabel];
        const shelfBooks = books.filter((b) => b.shelf === shelfKey);

        return (
          <div key={shelfLabel}>
            <h2 className="text-4xl text-gray-800 mb-6">{shelfLabel}</h2>

            {shelfBooks.length > 0 ? (
              <ShelfSection books={shelfBooks} />
            ) : (
              <p>No books added yet.</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
