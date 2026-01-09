import { useState, useRef, useEffect } from "react";
import type { Shelf } from "~/entities/bookshelf/model/types";

export function BookCardVertical({
  cover,
  author,
  title,
  onAddToShelf,
}: {
  cover?: string | undefined;
  author?: string;
  title?: string;
  onAddToShelf?: (shelf: Shelf) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectShelf = (shelf: Shelf) => {
    onAddToShelf?.(shelf);
    setOpen(false);
  };

  return (
    <div ref={ref} className="group w-1/3">
      <div className="relative w-40 h-56 mb-4 bg-gray-100 rounded-md shadow-sm flex items-center justify-center overflow-hidden">
        {cover ? (
          <img src={cover} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-md mb-4">No Cover</span>
        )}

        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-200 z-10"></div>

        <button
          className="hidden group-hover:flex items-center justify-center cursor-pointer w-8 h-8 text-lg text-gray-700 bg-white bg-opacity-70 rounded-lg p-1 absolute bottom-2 right-2 z-20 transition"
          onClick={() => setOpen((v) => !v)}
        >
          +
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute bottom-12 right-2 z-30 bg-white rounded-md shadow-md overflow-hidden text-sm">
            <button
              className="block w-full px-3 py-2 hover:bg-gray-100 text-left"
              onClick={() => selectShelf("want")}
            >
              Add to wishlist
            </button>
            <button
              className="block w-full px-3 py-2 hover:bg-gray-100 text-left"
              onClick={() => selectShelf("reading")}
            >
              Currently reading
            </button>
            <button
              className="block w-full px-3 py-2 hover:bg-gray-100 text-left"
              onClick={() => selectShelf("read")}
            >
              Mark as read
            </button>
          </div>
        )}
      </div>

      <h3 className="font-semibold text-xl text-gray-900 leading-snug line-clamp-2">
        {title}
      </h3>

      <p className="text-lg text-gray-500 mt-1 line-clamp-1">{author}</p>
    </div>
  );
}
