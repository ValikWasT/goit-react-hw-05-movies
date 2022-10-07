
import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "pages/Cast/Cast";
export const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path='cast' element={<Cast />}></Route>
        </Route>
      </Routes>
    </>
  );
};
