import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
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
import { Header } from 'components/Header/Header';

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
      <MainInfoBox>
        <Link to={BackLinkHref}>Back</Link>
        <MovieImg src={`https://image.tmdb.org/t/p/w300/${poster_path}`} />
        <MovieName>{title}</MovieName>
        <MovieRating>{vote_average}</MovieRating>
        <MovieInfoTitle>Overview</MovieInfoTitle>
        <MovieInfo>{overview}</MovieInfo>
        <MovieInfoTitle>Genres</MovieInfoTitle>
        <MovieInfo>{genreNames}</MovieInfo>
      </MainInfoBox>
      <AdditionalBox>
        <AddInfoList>
          <AddInfoItem>
            <Link to="cast">Cast</Link>
          </AddInfoItem>
          <AddInfoItem>
            <Link to="reviews">Reviews</Link>
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
