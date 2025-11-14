export default function SearchBar() {
  return (
    <div className="flex justify-between border border-gray-300 rounded-lg p-4 mb-6 text-2xl">
      <input className="ps-4" type="text" placeholder="Search books..." />
      <button className="text-white bg-blue-500 rounded-lg px-8 py-2">
        Search
      </button>
    </div>
  );
}
