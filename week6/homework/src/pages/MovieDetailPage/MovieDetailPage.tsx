import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { END_POINT } from "../../sheard/api/end-point";
import { MOVIE_QUERY_KEY } from "../../sheard/api/query-key";
import {
  MOVIE_QUERY_OPTIONS,
  RATING_MUTATION_OPTIONS,
  RATING_QUERY_OPTIONS,
} from "../../sheard/api/query-options";
import { MOVIE_IMAGE } from "../../sheard/constants/movie";
import { MovieHeroSection } from "./section/MovieHeroSection";
import { MovieInfoSection } from "./section/MovieInfoSection";

const formatDate = (date: string) => date.replaceAll("-", ".");

const formatCurrency = (price: number) =>
  price > 0 ? `US$${price.toLocaleString()}` : "정보 없음";

const formatRuntime = (runtime: number | null) => {
  if (!runtime) {
    return "정보 없음";
  }

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}시간 ${minutes}분`;
};

function MovieDetailPage() {
  const { movieId } = useParams();
  const parsedMovieId = Number(movieId);
  const queryClient = useQueryClient();
  const [ratingMessage, setRatingMessage] = useState("");

  const { data: movieDetail, isLoading } = useQuery(
    MOVIE_QUERY_OPTIONS.DETAIL(parsedMovieId),
  );
  const { data: guestSession } = useQuery(RATING_QUERY_OPTIONS.GUEST_SESSION());
  const guestSessionId = guestSession?.guest_session_id ?? "";
  const { data: ratedMovies } = useQuery(
    RATING_QUERY_OPTIONS.RATED_MOVIES(guestSessionId),
  );

  const currentRating = useMemo(
    () =>
      ratedMovies?.results.find((movie) => movie.id === parsedMovieId)?.rating,
    [parsedMovieId, ratedMovies],
  );

  const invalidateRatedMovies = () => {
    queryClient.invalidateQueries({
      queryKey: MOVIE_QUERY_KEY.RATED_MOVIES(guestSessionId),
    });
  };

  const rateMovieMutation = useMutation({
    ...RATING_MUTATION_OPTIONS.RATE(),
    onSuccess: () => {
      setRatingMessage("별점이 저장되었습니다.");
      invalidateRatedMovies();
    },
    onError: () => {
      setRatingMessage("별점 저장에 실패했습니다.");
    },
  });

  const deleteRatingMutation = useMutation({
    ...RATING_MUTATION_OPTIONS.DELETE_RATING(),
    onSuccess: () => {
      setRatingMessage("별점이 삭제되었습니다.");
      invalidateRatedMovies();
    },
    onError: () => {
      setRatingMessage("별점 삭제에 실패했습니다.");
    },
  });

  const handleSaveRating = (rating: number) => {
    if (!guestSessionId) {
      setRatingMessage("게스트 세션을 준비하는 중입니다.");
      return;
    }

    rateMovieMutation.mutate({
      movieId: parsedMovieId,
      guestSessionId,
      value: rating,
    });
  };

  const handleDeleteRating = () => {
    if (!guestSessionId) {
      setRatingMessage("게스트 세션을 준비하는 중입니다.");
      return;
    }

    if (!currentRating) {
      setRatingMessage("삭제할 별점이 없습니다.");
      return;
    }

    deleteRatingMutation.mutate({
      movieId: parsedMovieId,
      guestSessionId,
    });
  };

  if (isLoading) {
    return (
      <main className="px-6 py-8 text-center text-gray-700 dark:text-gray-300">
        영화를 불러오는 중...
      </main>
    );
  }

  if (!movieDetail) {
    return (
      <main className="px-6 py-8 text-center text-gray-700 dark:text-gray-300">
        영화 정보가 없습니다.
      </main>
    );
  }

  const movieHero = {
    backdrop: movieDetail.backdrop_path
      ? END_POINT.MOVIE.IMAGE_ORIGINAL(movieDetail.backdrop_path)
      : MOVIE_IMAGE.FALLBACK_BACKDROP,
    poster: movieDetail.poster_path
      ? END_POINT.MOVIE.IMAGE(movieDetail.poster_path)
      : MOVIE_IMAGE.FALLBACK_POSTER,
    title: movieDetail.title,
    releaseDate: movieDetail.release_date
      ? formatDate(movieDetail.release_date)
      : "개봉일 미정",
    genres: movieDetail.genres.map((genre) => genre.name),
    summaryList: [
      { label: "평점", value: `${movieDetail.vote_average.toFixed(1)} / 10` },
      { label: "투표 수", value: movieDetail.vote_count.toLocaleString() },
      { label: "상영 시간", value: formatRuntime(movieDetail.runtime) },
      { label: "상태", value: movieDetail.status },
    ],
  };

  const movieInfoList = [
    { label: "원제", value: movieDetail.original_title },
    { label: "원어", value: movieDetail.original_language },
    {
      label: "제작 국가",
      value:
        movieDetail.production_countries
          .map((country) => country.name)
          .join(", ") || "정보 없음",
    },
    {
      label: "사용 언어",
      value:
        movieDetail.spoken_languages
          .map((language) => language.english_name)
          .join(", ") || "정보 없음",
    },
    { label: "예산", value: formatCurrency(movieDetail.budget) },
    { label: "수익", value: formatCurrency(movieDetail.revenue) },
  ];

  return (
    <main className="mx-auto flex max-w-[1120px] flex-col gap-6 px-6 py-8">
      <Link
        className="text-sm font-semibold text-gray-800 dark:text-gray-200"
        to="/"
      >
        &lt; 목록으로 돌아가기
      </Link>
      <MovieHeroSection {...movieHero} />
      <MovieInfoSection
        overview={movieDetail.overview || "등록된 줄거리가 없습니다."}
        infoList={movieInfoList}
        currentRating={currentRating}
        ratingMessage={ratingMessage}
        isSavingRating={rateMovieMutation.isPending}
        isDeletingRating={deleteRatingMutation.isPending}
        onSaveRating={handleSaveRating}
        onDeleteRating={handleDeleteRating}
      />
    </main>
  );
}

export default MovieDetailPage;
