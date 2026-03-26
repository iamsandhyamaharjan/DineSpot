export default function SearchBar({ search, setSearch ,placeholder="Restaurant"}) {
    return (
        <div className="flex justify-center item-center mt-6">
            <div className="relative w-full max-w-xl">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <i className="fa-solid fa-magnifying-glass"></i>

                </span>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full shadow-md border border-gray-200"
                    placeholder={`Search ${placeholder}`} />
            </div>
        </div>
    )
}