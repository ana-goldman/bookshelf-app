import { useRef, useState } from "react";
import { useBookshelfContext } from "~/entities/bookshelf/model/BookshelfContext";
import {
  SHELF_LABEL,
  SHELF_TRANSITIONS,
} from "~/entities/bookshelf/model/shelfConfig";
import type { BookshelfItem, Shelf } from "~/entities/bookshelf/model/types";
import { useClickOutside } from "~/shared/lib/useClickOutside";
import { Dropdown } from "~/shared/ui/Dropdown";

export function BookCardHorizontal({ book }: { book: BookshelfItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { moveBook } = useBookshelfContext();
  useClickOutside(ref, () => setOpen(false));

  const selectShelf = async (shelf: Shelf) => {
    await moveBook(book.id!, shelf);
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      className="
        bg-white rounded-xl shadow-sm border border-gray-100 
        p-4 flex gap-4 items-start
        hover:shadow-md transition-shadow relative
      "
    >
      <div className="shrink-0">
        <div
          className="
            w-28 h-40 bg-gray-100 rounded-md shadow-sm
            flex items-center justify-center overflow-hidden
          "
        >
          {book.coverId ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400 text-md">No Cover</span>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 min-w-0">
        <h3 className="font-semibold text-3xl text-gray-900 leading-snug line-clamp-2">
          {book.title}
        </h3>

        <p className="text-2xl text-gray-500 mt-1 line-clamp-1">
          {book.author}
        </p>

        <div className="absolute bottom-4 right-4 grid grid-rows-2 gap-2">
          <button
            className="col-span-1 text-lg text-gray-500 bg-gray-100 rounded-lg px-4 py-2 cursor-pointer"
            onClick={() => setOpen((v) => !v)}
          >
            Move
          </button>

          {open && (
            <Dropdown
              className="right-0 top-12 rounded-lg shadow-lg border-none w-44 "
              items={SHELF_TRANSITIONS[book.shelf].map((shelf) => ({
                label: `Move to ${SHELF_LABEL[shelf]}`,
                onClick: () => selectShelf(shelf),
              }))}
            />
          )}

          <button className="col-span-1 text-lg text-gray-500 bg-gray-100 rounded-lg px-4 py-2 cursor-pointer">
            See all
          </button>
        </div>
      </div>
    </div>
  );
}
