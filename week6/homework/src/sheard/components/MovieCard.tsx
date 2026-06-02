import { Link } from "react-router-dom";

interface MovieCardProps {
  movieId: number;
  thumbnail: string;
  title: string;
  releaseDate: string;
  description: string;
}

export const MovieCard = ({
  movieId,
  thumbnail,
  title,
  releaseDate,
  description,
}: MovieCardProps) => {
  return (
    <Link
      to={`/movie/${movieId}`}
      className="flex flex-1 flex-col rounded-lg shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        className="h-60 rounded-lg object-cover"
        src={thumbnail}
        alt={title}
      />
      <div className="flex h-full flex-col gap-2 rounded-b-lg bg-white p-2 dark:bg-gray-900">
        <h2 className="line-clamp-1 text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {releaseDate}
        </p>
        <p className="line-clamp-4 text-sm text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </div>
    </Link>
  );
};
