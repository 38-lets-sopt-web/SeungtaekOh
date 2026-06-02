import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";
import { END_POINT } from "./end-point";
import { api } from "./config/instance";
import { MOVIE_QUERY_KEY } from "./query-key";
import { MOVIE_SEARCH_PARAMS } from "../constants/movie";
import type { MovieDetail, MovieResponse, RatingFilter } from "../types/type";

interface GetMoviesParams {
  page: number;
  rating: RatingFilter;
}

const getMovies = async ({
  page,
  rating,
}: GetMoviesParams): Promise<MovieResponse> => {
  const searchParams: Record<string, string | number> = {
    api_key: import.meta.env.VITE_API_KEY,
    language: MOVIE_SEARCH_PARAMS.LANGUAGE,
    page,
    sort_by: MOVIE_SEARCH_PARAMS.SORT_BY,
    include_adult: MOVIE_SEARCH_PARAMS.INCLUDE_ADULT,
    "vote_count.gte": MOVIE_SEARCH_PARAMS.MIN_VOTE_COUNT,
  };

  if (rating !== "all") {
    searchParams["vote_average.gte"] = rating;
  }

  return api
    .get(END_POINT.MOVIE.LIST, {
      searchParams,
    })
    .json<MovieResponse>();
};

const getMovieDetail = async (movieId: number): Promise<MovieDetail> => {
  return api
    .get(END_POINT.MOVIE.DETAIL(movieId), {
      searchParams: {
        api_key: import.meta.env.VITE_API_KEY,
        language: MOVIE_SEARCH_PARAMS.LANGUAGE,
      },
    })
    .json<MovieDetail>();
};

export const MOVIE_QUERY_OPTIONS = {
  LIST: (rating: RatingFilter) =>
    infiniteQueryOptions({
      queryKey: MOVIE_QUERY_KEY.LIST(rating),
      queryFn: ({ pageParam }) =>
        getMovies({ page: Number(pageParam), rating }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    }),
  DETAIL: (movieId: number) =>
    queryOptions({
      queryKey: MOVIE_QUERY_KEY.DETAIL(movieId),
      queryFn: () => getMovieDetail(movieId),
    }),
};
