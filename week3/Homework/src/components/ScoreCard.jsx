const ScoreCard = ({ text, score, className = "" }) => {
  return (
    <div
      className={`flex flex-col flex-1 bg-section items-center py-7 rounded-2xl gap-2 ${className}`}
    >
      <p>{text}</p>
      <strong className="text-5xl text-black">{score}</strong>
    </div>
  );
};
export default ScoreCard;
