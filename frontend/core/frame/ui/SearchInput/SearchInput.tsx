export interface ISearchInput {}

const SearchInput: React.FC<ISearchInput> = () => {
  return (
    <div className="relative rounded-lg">
      <input
        type="search"
        className="px-3 py-2.5 rounded bg-grey-4 text-grey-m_4 border-0 outline-0 text-sm w-64"
        placeholder="Search"
      />
      <button
        type="submit"
        className="absolute top-0 right-0 p-2.5 bg-grey-2 text-grey-m_4 rounded-r text-sm"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;
