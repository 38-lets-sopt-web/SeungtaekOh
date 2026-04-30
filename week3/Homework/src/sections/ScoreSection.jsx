import ScoreCard from "../components/ScoreCard";

const ScoreSection = () => {
  return (
    <div className="grid w-54 shrink-0 grid-cols-2 gap-4">
      <ScoreCard className="col-span-2" text="남은 시간" score="20.0" />
      <ScoreCard className="col-span-2" text="총 점수" score="0" />

      <ScoreCard className="text-positive" text="성공" score="0" />
      <ScoreCard className="text-negative" text="실패" score="0" />

      <ScoreCard className="col-span-2" text="안내 메세지" score="" />
    </div>
  );
};
export default ScoreSection;
