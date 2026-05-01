import { useState, useEffect, useRef } from "react";
import BoardSection from "./boardSection/BoardSection";
import ScoreSection from "./ScoreSection";
import Modal from "../../components/modal";
const GameSection = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [level, setLevel] = useState(1);
  const getTimeLimit = (level) => {
    if (level === 1) return 15;
    if (level === 2) return 20;
    return 30;
  };
  const [timeLeft, setTimeLeft] = useState(getTimeLimit(level));
  const [message, setMessage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [holeIndex, setHoleIndex] = useState(null);
  const [type, setType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const isSavedRankingRef = useRef(false);
  //게임 시작 시
  const handleStartGame = () => {
    setTotalScore(0);
    setSuccessCount(0);
    setFailCount(0);
    setMessage("");
    setTimeLeft(getTimeLimit(level));
    isSavedRankingRef.current = false;
    setIsPlaying(true);
  };

  //게임 종료 시
  const handleStopGame = () => {
    setTotalScore(0);
    setSuccessCount(0);
    setFailCount(0);
    setMessage("");
    setTimeLeft(getTimeLimit(level));
    setIsPlaying(false);
    setHoleIndex(null);
    setType(null);
  };

  // 두더지/폭탄 랜덤 출현
  useEffect(() => {
    if (!isPlaying) return;

    const getHoleCount = () => {
      const boardSize = level === 1 ? 2 : level === 2 ? 3 : 4;
      return boardSize * boardSize;
    };

    const openRandomHole = () => {
      const randomIndex = Math.floor(Math.random() * getHoleCount());
      const randomType = Math.random() < 0.7 ? "두더지" : "폭탄";

      setHoleIndex(randomIndex);
      setType(randomType);
    };

    const intervalId = setInterval(() => {
      openRandomHole();
    }, 1500);

    return () => clearInterval(intervalId);
  }, [isPlaying, level]);

  // 남은 시간 카운트다운
  useEffect(() => {
    if (!isPlaying) return;

    //랭킹 저장
    const saveRanking = (score) => {
      const newRanking = {
        id: Date.now(),
        level,
        score,
        successTime: getTimeLimit(level).toFixed(2),
        recordedAt: new Date().toLocaleString(),
      };

      const savedRankings = JSON.parse(localStorage.getItem("rankings")) || [];
      const nextRankings = [...savedRankings, newRanking];

      localStorage.setItem("rankings", JSON.stringify(nextRankings));
    };

    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsPlaying(false);
          setHoleIndex(null);
          setType(null);
          setFinalScore(totalScore);
          setIsModalOpen(true);
          if (!isSavedRankingRef.current) {
            saveRanking(totalScore);
            isSavedRankingRef.current = true;
          }
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isPlaying, level, totalScore]);

  // 두더지 클릭
  const handleClickHole = (index) => {
    if (!isPlaying) return;
    if (index !== holeIndex) return;

    if (type === "두더지") {
      setTotalScore((prev) => prev + 1);
      setSuccessCount((prev) => prev + 1);
      setMessage("성공!");
      setType("맞은두더지");

      setTimeout(() => {
        setHoleIndex(null);
        setType(null);
      }, 700);

      return;
    }
    if (type === "폭탄") {
      setTotalScore((prev) => prev - 1);
      setFailCount((prev) => prev + 1);
      setMessage("실패!");
      setHoleIndex(null);
      setType(null);
    }
  };

  return (
    <div className="flex gap-8">
      <ScoreSection
        timeLeft={timeLeft}
        totalScore={totalScore}
        successCount={successCount}
        failCount={failCount}
        message={message}
      />
      <BoardSection
        level={level}
        setLevel={setLevel}
        onStartGame={handleStartGame}
        onStopGame={handleStopGame}
        isPlaying={isPlaying}
        holeIndex={holeIndex}
        type={type}
        onClickHole={handleClickHole}
      />
      {isModalOpen && (
        <Modal
          totalScore={finalScore}
          onClose={() => {
            handleStopGame();
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default GameSection;
