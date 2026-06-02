export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
  vote_average: number;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetail {
  id: number;
  backdrop_path: string | null;
  poster_path: string | null;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  release_date: string;
  runtime: number | null;
  status: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  revenue: number;
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
}

export interface GuestSessionResponse {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}

export interface RatedMovie extends Movie {
  rating: number;
}

export interface RatedMoviesResponse {
  page: number;
  results: RatedMovie[];
  total_pages: number;
  total_results: number;
}

export type RatingFilter = "all" | "9" | "8" | "7" | "6" | "5";
