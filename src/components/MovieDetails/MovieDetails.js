import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
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

export const MovieDetails = () => {
  const [movieInfo, setmMovieInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId).then(r => setmMovieInfo(r));
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const { poster_path, title, vote_average, overview, genres } = movieInfo.data;
  const genreNames = genres.map(genre => genre.name).join(', ');

  return (
    <>
      <MainInfoBox>
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
          <AddInfoItem></AddInfoItem>
        </AddInfoList>
        <Outlet />
      </AdditionalBox>
    </>
  );
};
