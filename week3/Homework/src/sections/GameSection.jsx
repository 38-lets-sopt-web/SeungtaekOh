import { useState } from "react";
import BoardSection from "./BoardSection";
import ScoreSection from "./ScoreSection";

const GameSection = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [level, setLevel] = useState(2);
  return (
    <div className="flex gap-8">
      <ScoreSection />
      <BoardSection />
    </div>
  );
};

export default GameSection;
