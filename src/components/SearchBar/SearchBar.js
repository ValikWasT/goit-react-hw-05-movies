import { SearchBox, SearchInput } from './SearchBarStyled';
export const SearchBar = ({ value, onChange }) => {
  return (
    <SearchBox>
      <SearchInput
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </SearchBox>
  );
};
