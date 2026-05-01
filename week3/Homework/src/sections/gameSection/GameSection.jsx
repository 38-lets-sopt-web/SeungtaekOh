import { useState } from "react";
import BoardSection from "./boardSection/BoardSection";
import ScoreSection from "./ScoreSection";

const GameSection = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [level, setLevel] = useState(1);
  const [message, setMessage] = useState("");
  return (
    <div className="flex gap-8">
      <ScoreSection
        timeLeft={timeLeft}
        totalScore={totalScore}
        successCount={successCount}
        failCount={failCount}
        message={message}
      />
      <BoardSection level={level} setLevel={setLevel} />
    </div>
  );
};

export default GameSection;
