
import { Routes, Route } from "react-router-dom";
// import { Home } from "pages/Home/Home";
// import { Movies } from "pages/Movies/Movies";
// import { MovieDetails } from "./MovieDetails/MovieDetails";
// import { Cast } from "pages/Cast/Cast";
// import { Reviews } from "pages/Reviews/Reviews";
import { lazy, Suspense } from "react";

const Home = lazy(() => import('../pages/Home/Home'))
const Movies = lazy(() => import('../pages/Movies/Movies'))
const MovieDetails = lazy(() => import('../components/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('../pages/Cast/Cast'))
const Reviews = lazy(() => import('../pages/Reviews/Reviews'))

export const App = () => {
  return (
    <>
      <Suspense>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path='cast' element={<Cast />}></Route>
          <Route path='reviews' element={<Reviews />}></Route>
        </Route>
        </Routes>
        </Suspense>
    </>
  );
};
