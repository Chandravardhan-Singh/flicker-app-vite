import React, { FC, useState } from "react";
import "./search.css";
const Search: FC = () => {
  const [searchText, setSearchText] = useState("");
  const searchChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchText(e.target.value);
  };

  return (
    <input
      className="search"
      value={searchText}
      onChange={searchChangeHandler}
    />
  );
};

export default Search;
