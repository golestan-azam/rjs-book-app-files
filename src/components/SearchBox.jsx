import { IoSearchSharp } from "react-icons/io5";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button>
        <IoSearchSharp onClick={searchHandler} />
      </button>
    </div>
  );
}

export default SearchBox;
