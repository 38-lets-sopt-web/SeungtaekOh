import ScoreCard from "../../components/ScoreCard";

const ScoreSection = ({
  timeLeft,
  totalScore,
  successCount,
  failCount,
  message,
}) => {
  return (
    <div className="grid w-54 shrink-0 grid-cols-2 gap-4">
      <ScoreCard className="col-span-2" text="남은 시간" value={timeLeft} />
      <ScoreCard className="col-span-2" text="총 점수" value={totalScore} />

      <ScoreCard className="text-positive" text="성공" value={successCount} />
      <ScoreCard className="text-negative" text="실패" value={failCount} />

      <ScoreCard className="col-span-2" text="안내 메세지" value={message} />
    </div>
  );
};
export default ScoreSection;
