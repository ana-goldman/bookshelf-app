export function BookCardHorizontal() {
  return (
    <div
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
          <span className="text-gray-400 text-md">No Cover</span>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 min-w-0">
        <h3 className="font-semibold text-3xl text-gray-900 leading-snug line-clamp-2">
          Title
        </h3>

        <p className="text-2xl text-gray-500 mt-1 line-clamp-1">Author</p>

        <div className="absolute bottom-4 right-4">
          <button className="col-span-1 text-lg text-gray-500 bg-gray-100 rounded-lg px-4 py-2">
            To all
          </button>
        </div>
      </div>
    </div>
  );
}
