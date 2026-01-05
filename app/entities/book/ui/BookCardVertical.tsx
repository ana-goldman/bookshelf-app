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
  return (
    <div className="group w-1/3">
      <div className="relative w-40 h-56 mb-4 bg-gray-100 rounded-md shadow-sm flex items-center justify-center overflow-hidden">
        {cover ? (
          <img src={cover} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-md mb-4">No Cover</span>
        )}

        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-200 z-10"></div>

        <button
          className="hidden group-hover:flex items-center justify-center cursor-pointer w-8 h-8 text-lg text-gray-700 bg-white bg-opacity-70 rounded-lg p-1 absolute bottom-2 right-2 z-20 transition"
          onClick={() => onAddToShelf && onAddToShelf("want")}
        >
          +
        </button>
      </div>

      <h3 className="font-semibold text-xl text-gray-900 leading-snug line-clamp-2">
        {title}
      </h3>

      <p className="text-lg text-gray-500 mt-1 line-clamp-1">{author}</p>
    </div>
  );
}
