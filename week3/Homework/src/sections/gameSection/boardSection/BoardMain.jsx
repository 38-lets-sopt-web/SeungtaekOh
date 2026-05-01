import Hole from "../../../components/Hole";

const BoardMain = ({ level, holeIndex, type, onClickHole }) => {
  const boardSize = level === 1 ? 2 : level === 2 ? 3 : 4;
  const holeCount = boardSize * boardSize;
  const gridClassName =
    level === 1 ? "grid-cols-2" : level === 2 ? "grid-cols-3" : "grid-cols-4";

  return (
    <main className="px-10">
      <div className={`grid gap-4 flex-1 bg-white px-10 py-2 ${gridClassName}`}>
        {Array.from({ length: holeCount }).map((_, index) => (
          <Hole
            key={index}
            type={holeIndex === index ? type : null}
            onClick={() => onClickHole(index)}
          />
        ))}
      </div>
    </main>
  );
};

export default BoardMain;
