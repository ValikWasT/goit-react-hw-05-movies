import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Trends } from 'components/TrendsList/TrendsList';
import { fetchTrends } from 'Api/fetchApi';

const Title = styled.h1`
  font-size: 48px;
  color: orange;
`;
const HomeBox = styled.div`
  margin: 0 auto;
  width: 500px;
  text-align: center;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrends().then(r => setMovies(r));
  }, []);

  return (
    <HomeBox>
      <Title>Trending today</Title>
      <Trends trends={movies} />
    </HomeBox>
  );
};
export default Home;
