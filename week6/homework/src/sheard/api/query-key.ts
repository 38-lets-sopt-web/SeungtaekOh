import type { RatingFilter } from "../types/type";

export const MOVIE_QUERY_KEY = {
  LIST: (rating: RatingFilter) => ["movies", rating],
  DETAIL: (movieId: number) => ["movie", movieId],
  GUEST_SESSION: () => ["guest-session"],
  RATED_MOVIES: (guestSessionId: string) => [
    "guest-session",
    guestSessionId,
    "rated-movies",
  ],
};
