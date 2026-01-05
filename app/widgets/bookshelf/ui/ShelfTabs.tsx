import { useBookshelf } from "~/entities/bookshelf/model/useBookshelf";
import { ShelfSection } from "./ShelfSection";

export function ShelfTabs() {
  const shelves = ["Currently Reading", "Finished", "Wishlist"];

  const { books } = useBookshelf();

  console.log(books);

  return (
    <div className="md:basis-1/2 w-full">
      {shelves.map((shelf) => (
        <div key={shelf}>
          <h2 className="text-4xl text-gray-800 mb-6">{shelf}</h2>
          {/* <p>No books added yet.</p> */}
          <ShelfSection />
        </div>
      ))}
    </div>
  );
}
