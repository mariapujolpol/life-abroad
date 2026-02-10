
function SearchBar({searchTerm, setSearchTerm}) {
    return (
        <div className="search-bar">
            <h2>Search Journal</h2>
            <input
                
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title..."
            />
        </div>
    )
}

export default SearchBar;