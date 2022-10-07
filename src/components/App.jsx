
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
const NotFound = lazy(() => import('../components/NotFound/NotFound'))
const SharedLayout = lazy(() => import("../components/SharedLayout/SharedLayout"))

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path='movies' element={<Movies />}/>
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path='cast' element={<Cast />}></Route>
              <Route path='reviews' element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        </Suspense>
    </>
  );
};
