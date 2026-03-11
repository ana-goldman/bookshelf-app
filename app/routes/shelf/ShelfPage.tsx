import { useParams } from "react-router";
import { useBookshelfContext } from "~/entities/bookshelf/model/BookshelfContext";
import type { Shelf } from "~/entities/bookshelf/model/types";
import type { Route } from "./+types/ShelfPage";
import { SHELF_LABEL } from "~/entities/bookshelf/model/shelfConfig";

const validShelves: Shelf[] = ["want", "reading", "read"];

export async function loader({ params }: Route.LoaderArgs) {
  if (!params.shelf || !validShelves.includes(params.shelf as Shelf)) {
    throw new Response("Not Found", { status: 404 });
  }

  return null;
}

export default function ShelfPage() {
  const { shelf } = useParams() as { shelf: Shelf };
  const { books } = useBookshelfContext();

  const shelfBooks = books.filter((book) => book.shelf === shelf);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{SHELF_LABEL[shelf]}</h1>
      <p className="text-gray-600">
        All books on the "{SHELF_LABEL[shelf]}" shelf are displayed here. You
        can click on a book to see more details or move it to a different shelf.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        {shelfBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 w-full"
          >
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-500">{book.author}</p>
          </div>
        ))}
        <div className="md:basis-1/2 w-full"></div>
      </div>
    </div>
  );
}
