import { useRef } from "react";

import * as S from "./SearchBar.style";

type Props = {
  onSubmit: (searchValue: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchRef.current) {
      searchRef.current.value = e.target.value;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current) {
      onSubmit(searchRef.current.value);
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          ref={searchRef}
          onChange={handleChange}
        />
        <S.ButtonInput type="submit">Search</S.ButtonInput>
      </form>
    </header>
  );
};

export default SearchBar;