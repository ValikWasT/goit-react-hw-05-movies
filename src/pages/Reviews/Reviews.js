import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'Api/fetchApi';
import styled from 'styled-components';

const ReviewBox = styled.div``;
const ReviewList = styled.ul`
  padding: 0;
  list-style: none;
`;
const ReviewItem = styled.li``;
const AuthorName = styled.p`
  text-align: center;
  font-weight: 700;
`;
const AuthorReview = styled.p``;
const ReviewError = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
`;

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(r => setReviews(r));
  }, [movieId]);

  if (!reviews) {
    return;
  }

  if (reviews.length === 0) {
    return <ReviewError>We don't have an reviews for this movie.</ReviewError>;
  }

  return (
    <ReviewBox>
      <ReviewList>
        {reviews.map(review => (
          <ReviewItem key={review.id}>
            <AuthorName>{review.author}</AuthorName>
            <AuthorReview>{review.content}</AuthorReview>
          </ReviewItem>
        ))}
      </ReviewList>
    </ReviewBox>
  );
};
export default Reviews;
