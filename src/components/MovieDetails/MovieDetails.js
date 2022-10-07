import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'Api/fetchApi';
import {
  MovieImg,
  MainInfoBox,
  AdditionalBox,
  MovieName,
  MovieRating,
  MovieInfo,
  MovieInfoTitle,
  AddInfoList,
  AddInfoItem,
} from './MovieDetailsStyled';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: orangered;
`;
const LinkBox = styled.div`
  text-align: center;
  width: 500px;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const InfoContainer = styled.div`
  width: 240px;
`;

const MovieDetails = () => {
  const [movieInfo, setmMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMovieById(movieId).then(r => setmMovieInfo(r));
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const { poster_path, title, vote_average, overview, genres } = movieInfo.data;
  const genreNames = genres.map(genre => genre.name).join(', ');
  const BackLinkHref = location.state?.from ?? '/';

  return (
    <>
      <LinkBox>
        <Link to={BackLinkHref}>Back</Link>
      </LinkBox>

      <MainInfoBox>
        <MovieImg src={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
        <InfoContainer>
          <MovieName>{title}</MovieName>
          <MovieRating>Rating: {vote_average}</MovieRating>
          <MovieInfoTitle>Overview</MovieInfoTitle>
          <MovieInfo>{overview}</MovieInfo>
          <MovieInfoTitle>Genres</MovieInfoTitle>
          <MovieInfo>{genreNames}</MovieInfo>
        </InfoContainer>
      </MainInfoBox>
      <AdditionalBox>
        <AddInfoList>
          <AddInfoItem>
            <Link to="cast" state={{ from: location.state.from }}>
              Cast
            </Link>
          </AddInfoItem>
          <AddInfoItem>
            <Link to="reviews" state={{ from: location.state.from }}>
              Reviews
            </Link>
          </AddInfoItem>
        </AddInfoList>
        <Suspense>
          <Outlet />
        </Suspense>
      </AdditionalBox>
    </>
  );
};

export default MovieDetails;
