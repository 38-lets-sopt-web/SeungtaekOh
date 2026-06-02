import { useState } from "react";

const RankingSection = () => {
  const [rankings, setRankings] = useState(() => {
    const savedRankings = JSON.parse(localStorage.getItem("rankings")) || [];

    return savedRankings.sort((a, b) => {
      if (b.level !== a.level) return b.level - a.level;
      return b.score - a.score;
    });
  });

  const handleResetRankings = () => {
    const isConfirmed = window.confirm("랭킹 기록을 초기화할까요?");

    if (!isConfirmed) return;

    localStorage.removeItem("rankings");
    setRankings([]);
  };
  return (
    <div className="bg-section rounded-2xl h-150 p-5">
      <header className="flex justify-between">
        <p className="font-bold text-xl">랭킹 보드</p>
        <button
          className="bg-negative text-white rounded-2xl px-3"
          onClick={handleResetRankings}
        >
          초기화
        </button>
      </header>
      <table className="mt-4 w-full overflow-hidden text-center text-sm">
        <thead className="bg-board">
          <tr>
            <th className="py-3 font-bold">순위</th>
            <th className="py-3 font-bold">레벨</th>
            <th className="py-3 font-bold">점수</th>
            <th className="py-3 font-bold">성공 시간</th>
            <th className="py-3 font-bold">기록 시각</th>
          </tr>
        </thead>

        <tbody>
          {rankings.map((ranking, index) => (
            <tr key={ranking.id} className="border-b border-white/60">
              <td className="py-3">{index + 1}</td>
              <td className="py-3">Level {ranking.level}</td>
              <td className="py-3">{ranking.score}점</td>
              <td className="py-3">{ranking.successTime}초</td>
              <td className="py-3">{ranking.recordedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingSection;
