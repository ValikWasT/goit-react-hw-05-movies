import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, Item, Link } from './TrendsListStyled';
export const Trends = ({ trends }) => {
  const location = useLocation();
  return (
    <List>
      {trends.map(movie => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.original_title}
          </Link>
        </Item>
      ))}
    </List>
  );
};

Trends.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
