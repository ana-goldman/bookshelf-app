export function BookCardVertical({
  cover,
  author,
  title,
}: {
  cover?: string | undefined;
  author?: string;
  title?: string;
}) {
  return (
    <div className="hover:shadow-md transition-shadow w-1/3">
      <div className="w-40 h-56 mb-4 bg-gray-100 rounded-md shadow-sm flex items-center justify-center overflow-hidden">
        {cover ? (
          <img src={cover} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-md mb-4">No Cover</span>
        )}
      </div>

      <h3 className="font-semibold text-xl text-gray-900 leading-snug line-clamp-2">
        {title}
      </h3>

      <p className="text-lg text-gray-500 mt-1 line-clamp-1">{author}</p>
    </div>
  );
}
