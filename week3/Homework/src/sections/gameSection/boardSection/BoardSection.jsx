import BoardHeader from "./BoardHeader";
import BoardMain from "./BoardMain";
const BoardSection = ({
  level,
  setLevel,
  onStartGame,
  onStopGame,
  isPlaying,
  holeIndex,
  type,
  onClickHole,
}) => {
  return (
    <div className="flex flex-col flex-1 p-3 bg-section rounded-2xl gap-2">
      <BoardHeader
        level={level}
        setLevel={setLevel}
        onStartGame={onStartGame}
        onStopGame={onStopGame}
        isPlaying={isPlaying}
      />
      <BoardMain
        level={level}
        holeIndex={holeIndex}
        type={type}
        onClickHole={onClickHole}
      />
    </div>
  );
};

export default BoardSection;
