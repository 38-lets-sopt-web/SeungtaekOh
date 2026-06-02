import type { RatingFilter } from "../types/type";

const ratingOptions = [
  { label: "전체 별점", value: "all" },
  { label: "9점 이상", value: "9" },
  { label: "8점 이상", value: "8" },
  { label: "7점 이상", value: "7" },
  { label: "6점 이상", value: "6" },
  { label: "5점 이상", value: "5" },
] satisfies { label: string; value: RatingFilter }[];

interface HeaderProps {
  selectedRating: RatingFilter;
  onChangeRating: (rating: RatingFilter) => void;
}

export const Header = ({ selectedRating, onChangeRating }: HeaderProps) => {
  return (
    <div className="w-full rounded-2xl bg-white p-4 dark:bg-gray-900">
      <select
        className="w-40 rounded-lg border border-gray-200 bg-white p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
        value={selectedRating}
        onChange={(event) => onChangeRating(event.target.value as RatingFilter)}
      >
        {ratingOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
