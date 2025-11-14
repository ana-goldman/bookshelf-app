export function BookCardVertical() {
  return (
    <div className="hover:shadow-md transition-shadow">
      <div className="w-full flex justify-center mb-4">
        <div className="w-40 h-56 bg-gray-100 rounded-md shadow-sm flex items-center justify-center overflow-hidden">
          <span className="text-gray-400 text-md">No Cover</span>
        </div>
      </div>

      <h3 className="font-semibold text-3xl text-gray-900 leading-snug line-clamp-2">
        Title
      </h3>

      <p className="text-2xl text-gray-500 mt-1 line-clamp-1">Author</p>
    </div>
  );
}
