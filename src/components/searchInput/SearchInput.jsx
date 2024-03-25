import { useState } from "react";

export default function SearchInput({ searchValueHandler }) {
  const [value, setValue] = useState("");
  const searchHandler = () => {
    searchValueHandler(value);
    setValue("");
  };

  return (
    <div className="w-[500px] mb-6 flex items-center gap-3">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search By Category"
        type="text"
        className="w-full rounded p-2 border border-gray-400 outline-none"
      />
      <button
        onClick={searchHandler}
        className="bg-black px-5 py-2 text-lg rounded text-white"
      >
        Search
      </button>
    </div>
  );
}
