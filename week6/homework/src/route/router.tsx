import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MovieDetailPage from "../pages/MovieDetailPage/MovieDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/movie/:movieId",
    element: <MovieDetailPage />,
  },
]);
