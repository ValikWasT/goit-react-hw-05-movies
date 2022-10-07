import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'Api/fetchApi';
import styled from 'styled-components';

const CastBox = styled.div``;
const CastList = styled.ul``;
const CastItem = styled.li``;
const CastImg = styled.img``;
const CastName = styled.p``;
const CastCharacter = styled.p``;

export const Cast = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(r => setMovie(r));
  }, [movieId]);

  if (!movie) {
    return;
  }

  const listOfActors = movie.data.cast;

  return (
    <CastBox>
      <CastList>
        {listOfActors.map(actor => (
          <CastItem key={actor.id}>
            {actor.profile_path ? (
              <CastImg
                src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                width={100}
              />
            ) : (
              <CastImg
                src="https://img.freepik.com/free-vector/question-mark-sign-brush-stroke-trash-style-typography-vector_53876-140880.jpg?w=2000"
                width={100}
              />
            )}
            <CastName>{actor.name}</CastName>
            {actor.character && (
              <CastCharacter>{actor.character}</CastCharacter>
            )}
          </CastItem>
        ))}
      </CastList>
    </CastBox>
  );
};
