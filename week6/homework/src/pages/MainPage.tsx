import { useMemo, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Header } from "../sheard/components/Header";
import { MovieCard } from "../sheard/components/MovieCard";
import { END_POINT } from "../sheard/api/end-point";
import { MOVIE_QUERY_OPTIONS } from "../sheard/api/query-options";
import { MOVIE_IMAGE } from "../sheard/constants/movie";
import { useInfiniteScroll } from "../sheard/hooks/useInfiniteScroll";
import { useTheme } from "../sheard/providers/theme";
import type { RatingFilter } from "../sheard/types/type";

function MainPage() {
  const [selectedRating, setSelectedRating] = useState<RatingFilter>("all");
  const { theme, toggleTheme } = useTheme();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery(MOVIE_QUERY_OPTIONS.LIST(selectedRating));

  const movies = useMemo(
    () => data?.pages.flatMap((page) => page.results) ?? [],
    [data],
  );

  const observerRef = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  return (
    <main className="flex flex-col gap-4 px-80">
      <div className="flex items-center justify-between py-4">
        <h1 className="text-5xl font-bold text-gray-950 dark:text-white">
          Movie Explorer
        </h1>
        <button
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
          type="button"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "라이트 모드" : "다크 모드"}
        </button>
      </div>
      <Header
        selectedRating={selectedRating}
        onChangeRating={setSelectedRating}
      />
      <section className="grid grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            thumbnail={
              movie.poster_path
                ? END_POINT.MOVIE.IMAGE(movie.poster_path)
                : MOVIE_IMAGE.FALLBACK_POSTER
            }
            title={movie.title}
            releaseDate={movie.release_date || "개봉일 미정"}
            description={movie.overview || "등록된 설명이 없습니다."}
          />
        ))}
      </section>
      {isLoading && (
        <p className="py-10 text-center text-gray-700 dark:text-gray-300">
          영화를 불러오는 중...
        </p>
      )}
      <div ref={observerRef} className="h-10" />
      {isFetchingNextPage && (
        <p className="pb-10 text-center text-gray-700 dark:text-gray-300">
          다음 영화를 불러오는 중...
        </p>
      )}
    </main>
  );
}

export default MainPage;
