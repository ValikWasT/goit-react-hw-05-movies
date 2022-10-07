import { Link, useLocation } from 'react-router-dom';
import { List, Item } from './TrendsListStyled';
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
