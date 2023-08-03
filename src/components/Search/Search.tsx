import React, { useState } from "react";
import { Button } from "../Button";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

import styles from "./Search.module.scss";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

const Search: React.FC<SearchProps> = ({ hasError, onSubmit }) => {
  const [name, setName] = useState<string>("");
  console.log("render");
  //?render all?
  const buttonClickHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
      setName("");
    }
  };

  return (
    <form onSubmit={buttonClickHandler}>
      <div className={styles.search}>
        <label className={styles.label} htmlFor="search">
          <SearchIcon />
        </label>
        <input
          className={styles.textField}
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          type="text"
          name="username"
          id="search"
          autoComplete="off"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button children="Search" type="submit" />
      </div>
    </form>
  );
};

export { Search };
