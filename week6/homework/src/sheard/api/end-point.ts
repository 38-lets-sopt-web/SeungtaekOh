export const END_POINT = {
  MOVIE: {
    LIST: "discover/movie",
    DETAIL: (movieId: number) => `movie/${movieId}`,
    RATING: (movieId: number) => `movie/${movieId}/rating`,
    IMAGE: (posterPath: string) =>
      `https://image.tmdb.org/t/p/w500${posterPath}`,
    IMAGE_ORIGINAL: (imagePath: string) =>
      `https://image.tmdb.org/t/p/original${imagePath}`,
  },
  AUTH: {
    GUEST_SESSION: "authentication/guest_session/new",
  },
  GUEST_SESSION: {
    RATED_MOVIES: (guestSessionId: string) =>
      `guest_session/${guestSessionId}/rated/movies`,
  },
  GENRE: {
    LIST: "genre/movie/list",
  },
};
