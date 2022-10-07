import { useState, useEffect } from 'react';
import { fetchMovieByName } from 'Api/fetchApi';
import { Header } from 'components/Header/Header';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchButton } from 'components/SearchBar/SearchBarStyled';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
`;
const Item = styled.li``;

const Movies = () => {
  const [movieNames, setMovieNames] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchMovieByName(searchQuery).then(r => setMovieNames(r));
  }, [searchQuery]);

  const changeSearchValue = value => {
    setSearchValue(value);
  };

  const handleClickButton = () => {
    setSearchParams(searchValue !== '' ? { query: searchValue } : {});
  };

  return (
    <>
      <Header />
      <SearchBar value={searchValue} onChange={changeSearchValue} />
      <SearchButton type="button" onClick={handleClickButton}>
        Search
      </SearchButton>
      {movieNames && (
        <List>
          {movieNames.map(movie => (
            <Item key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default Movies;
