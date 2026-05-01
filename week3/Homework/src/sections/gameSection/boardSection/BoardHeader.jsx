import Button from "../../../components/Button";

const BoardHeader = ({
  level,
  setLevel,
  onStartGame,
  onStopGame,
  isPlaying,
}) => {
  return (
    <header className="flex justify-between">
      <select
        value={level}
        onChange={(event) => setLevel(Number(event.target.value))}
        disabled={isPlaying}
        className="bg-white px-2 py-1 rounded-sm"
      >
        <option value={1}>Level 1</option>
        <option value={2}>Level 2</option>
        <option value={3}>Level 3</option>
      </select>
      <div className="flex gap-2">
        <Button onClick={onStartGame} className="bg-positive text-white">
          시작
        </Button>
        <Button onClick={onStopGame} className="bg-negative text-white">
          중단
        </Button>
      </div>
    </header>
  );
};

export default BoardHeader;
