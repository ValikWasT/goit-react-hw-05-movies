import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from 'components/Header/Header';
import { Trends } from 'components/TrendsList/TrendsList';
import { fetchTrends } from 'Api/fetchApi';

const Title = styled.h1``;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrends().then(r => setMovies(r));
  }, []);

  return (
    <>
      <Header />
      <Title>Trending today</Title>
      <Trends trends={movies} />
    </>
  );
};
export default Home;
