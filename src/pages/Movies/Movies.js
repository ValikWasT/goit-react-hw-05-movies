import { useState, useEffect } from 'react';
import { fetchMovieByName } from 'Api/fetchApi';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchButton } from 'components/SearchBar/SearchBarStyled';
import { useSearchParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from '../../components/TrendsList/TrendsListStyled';

const List = styled.ul`
  padding: 0;
  list-style: none;
`;
const Item = styled.li`
  margin-bottom: 10px;
`;
const SearchInputBox = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 500px;
  display: flex;
  justify-content: space-between;
`;
const MovieListBox = styled.div`
  margin: 0 auto;
  width: 500px;
  text-align: center;
`;

const Movies = () => {
  const [movieNames, setMovieNames] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [searchValue, setSearchValue] = useState(searchQuery ?? '');
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
      <SearchInputBox>
        <SearchBar value={searchValue} onChange={changeSearchValue} />
        <SearchButton type="button" onClick={handleClickButton}>
          Search
        </SearchButton>
      </SearchInputBox>
      <MovieListBox>
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
      </MovieListBox>
    </>
  );
};

export default Movies;
