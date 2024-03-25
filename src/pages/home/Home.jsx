import { useState } from "react";
import Featured from "../../components/featured/Featured";
import SearchInput from "../../components/searchInput/SearchInput";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const searchValueHandler = (value) => {
    setSearchValue(value);
  };
  return (
    <div className="template-container py-6">
      <SearchInput searchValueHandler={searchValueHandler} />
      <Featured searchValue={searchValue} />
    </div>
  );
}
