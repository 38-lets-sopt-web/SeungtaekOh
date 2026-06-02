import { useState, type FormEvent } from "react";
import { LayoutCard } from "../../../sheard/components/LayoutCard";

interface MovieInfoItem {
  label: string;
  value: string;
}

interface MovieInfoSectionProps {
  overview: string;
  infoList: MovieInfoItem[];
  currentRating?: number;
  ratingMessage: string;
  isSavingRating: boolean;
  isDeletingRating: boolean;
  onSaveRating: (rating: number) => void;
  onDeleteRating: () => void;
}

interface RatingFormProps {
  currentRating?: number;
  ratingMessage: string;
  isSavingRating: boolean;
  isDeletingRating: boolean;
  onSaveRating: (rating: number) => void;
  onDeleteRating: () => void;
}

const RatingForm = ({
  currentRating,
  ratingMessage,
  isSavingRating,
  isDeletingRating,
  onSaveRating,
  onDeleteRating,
}: RatingFormProps) => {
  const [rating, setRating] = useState(
    currentRating ? String(currentRating) : "",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ratingValue = Number(rating);

    if (!rating || Number.isNaN(ratingValue)) {
      setErrorMessage("별점을 입력해주세요.");
      return;
    }

    if (ratingValue < 0.5 || ratingValue > 10) {
      setErrorMessage("별점은 0.5 이상 10.0 이하로 입력해주세요.");
      return;
    }

    setErrorMessage("");
    onSaveRating(ratingValue);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <label
        htmlFor="rating"
        className="text-sm font-semibold text-gray-900 dark:text-white"
      >
        0.5 ~ 10.0
      </label>
      <input
        id="rating"
        className="h-12 rounded-xl border border-gray-200 bg-white px-4 text-gray-900 outline-none focus:border-gray-400 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
        type="number"
        min="0.5"
        max="10"
        step="0.5"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />
      <div className="flex gap-2">
        <button
          className="rounded-lg bg-gray-950 px-4 py-2 text-sm font-semibold text-white disabled:bg-gray-400 dark:bg-white dark:text-gray-950 dark:disabled:bg-gray-700 dark:disabled:text-gray-400"
          disabled={isSavingRating}
          type="submit"
        >
          {isSavingRating ? "저장 중..." : "별점 저장"}
        </button>
        <button
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-400 disabled:text-gray-300 dark:border-gray-700 dark:text-gray-300 dark:disabled:text-gray-600"
          disabled={isDeletingRating}
          onClick={onDeleteRating}
          type="button"
        >
          {isDeletingRating ? "삭제 중..." : "별점 삭제하기"}
        </button>
      </div>
      {errorMessage && (
        <p className="text-sm font-semibold text-red-500">{errorMessage}</p>
      )}
      {ratingMessage && (
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          {ratingMessage}
        </p>
      )}
    </form>
  );
};

export const MovieInfoSection = ({
  overview,
  infoList,
  currentRating,
  ratingMessage,
  isSavingRating,
  isDeletingRating,
  onSaveRating,
  onDeleteRating,
}: MovieInfoSectionProps) => {
  return (
    <section className="flex flex-col gap-6">
      <LayoutCard title="줄거리">
        <p className="text-sm leading-7 text-gray-800 dark:text-gray-300">
          {overview}
        </p>
      </LayoutCard>

      <div className="grid grid-cols-[1fr_420px] gap-6">
        <LayoutCard title="기본 정보">
          <dl className="flex flex-col text-sm">
            {infoList.map((info) => (
              <div
                key={info.label}
                className="grid grid-cols-[120px_1fr] border-b border-gray-100 py-3 last:border-b-0 dark:border-gray-800"
              >
                <dt className="text-gray-500 dark:text-gray-400">
                  {info.label}
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white">
                  {info.value}
                </dd>
              </div>
            ))}
          </dl>
        </LayoutCard>

        <LayoutCard title="별점 남기기">
          <RatingForm
            key={currentRating ?? "empty"}
            currentRating={currentRating}
            ratingMessage={ratingMessage}
            isSavingRating={isSavingRating}
            isDeletingRating={isDeletingRating}
            onSaveRating={onSaveRating}
            onDeleteRating={onDeleteRating}
          />
        </LayoutCard>
      </div>
    </section>
  );
};
