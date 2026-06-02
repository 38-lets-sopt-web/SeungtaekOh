import { mutationOptions, queryOptions } from "@tanstack/react-query";
import { END_POINT } from "./end-point";
import { api } from "./config/instance";
import { MOVIE_QUERY_KEY } from "./query-key";
import { MOVIE_SEARCH_PARAMS } from "../constants/movie";
import type { GuestSessionResponse, RatedMoviesResponse } from "../types/type";

interface RateMovieParams {
  movieId: number;
  guestSessionId: string;
  value: number;
}

interface DeleteMovieRatingParams {
  movieId: number;
  guestSessionId: string;
}

const getGuestSession = async (): Promise<GuestSessionResponse> => {
  const savedGuestSessionId = localStorage.getItem("guestSessionId");

  if (savedGuestSessionId) {
    return {
      success: true,
      guest_session_id: savedGuestSessionId,
      expires_at: "",
    };
  }

  const guestSession = await api
    .get(END_POINT.AUTH.GUEST_SESSION, {
      searchParams: {
        api_key: import.meta.env.VITE_API_KEY,
      },
    })
    .json<GuestSessionResponse>();

  localStorage.setItem("guestSessionId", guestSession.guest_session_id);

  return guestSession;
};

const getRatedMovies = async (
  guestSessionId: string,
): Promise<RatedMoviesResponse> => {
  return api
    .get(END_POINT.GUEST_SESSION.RATED_MOVIES(guestSessionId), {
      searchParams: {
        api_key: import.meta.env.VITE_API_KEY,
        language: MOVIE_SEARCH_PARAMS.LANGUAGE,
      },
    })
    .json<RatedMoviesResponse>();
};

const rateMovie = async ({
  movieId,
  guestSessionId,
  value,
}: RateMovieParams) => {
  await api.post(END_POINT.MOVIE.RATING(movieId), {
    searchParams: {
      api_key: import.meta.env.VITE_API_KEY,
      guest_session_id: guestSessionId,
    },
    json: {
      value,
    },
  });
};

const deleteMovieRating = async ({
  movieId,
  guestSessionId,
}: DeleteMovieRatingParams) => {
  await api.delete(END_POINT.MOVIE.RATING(movieId), {
    searchParams: {
      api_key: import.meta.env.VITE_API_KEY,
      guest_session_id: guestSessionId,
    },
  });
};

export const RATING_QUERY_OPTIONS = {
  GUEST_SESSION: () =>
    queryOptions({
      queryKey: MOVIE_QUERY_KEY.GUEST_SESSION(),
      queryFn: getGuestSession,
    }),
  RATED_MOVIES: (guestSessionId: string) =>
    queryOptions({
      queryKey: MOVIE_QUERY_KEY.RATED_MOVIES(guestSessionId),
      queryFn: () => getRatedMovies(guestSessionId),
      enabled: guestSessionId.length > 0,
    }),
};

export const RATING_MUTATION_OPTIONS = {
  RATE: () =>
    mutationOptions({
      mutationFn: rateMovie,
    }),
  DELETE_RATING: () =>
    mutationOptions({
      mutationFn: deleteMovieRating,
    }),
};
