interface MovieSummaryItem {
  label: string;
  value: string;
}

interface MovieHeroSectionProps {
  backdrop: string;
  poster: string;
  title: string;
  releaseDate: string;
  genres: string[];
  summaryList: MovieSummaryItem[];
}

export const MovieHeroSection = ({
  backdrop,
  poster,
  title,
  releaseDate,
  genres,
  summaryList,
}: MovieHeroSectionProps) => {
  return (
    <section className="overflow-hidden rounded-2xl bg-white dark:bg-gray-900">
      <img
        className="h-[420px] w-full object-cover"
        src={backdrop}
        alt={`${title} 배경 이미지`}
      />

      <div className="grid grid-cols-[280px_1fr] gap-8 p-8">
        <img
          className="h-[400px] w-full rounded-xl object-cover"
          src={poster}
          alt={title}
        />

        <div className="flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-base font-semibold text-gray-500 dark:text-gray-400">
              {releaseDate}
            </p>
            <h1 className="text-5xl font-extrabold text-gray-950 dark:text-white">
              {title}
            </h1>
            <ul className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <li
                  key={genre}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300"
                >
                  {genre}
                </li>
              ))}
            </ul>
          </div>

          <dl className="grid grid-cols-2 gap-4">
            {summaryList.map((summary) => (
              <div
                key={summary.label}
                className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700"
              >
                <dt className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {summary.label}
                </dt>
                <dd className="text-lg font-bold text-gray-950 dark:text-white">
                  {summary.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
