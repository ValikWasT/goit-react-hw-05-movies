import { Link } from 'react-router-dom';
import { List, Item } from './TrendsListStyled';
export const Trends = ({ trends }) => {
  return (
    <List>
      {trends.map(movie => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
        </Item>
      ))}
    </List>
  );
};
