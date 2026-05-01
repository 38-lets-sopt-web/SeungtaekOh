import Button from "../../../components/Button";

const BoardHeader = ({ level, setLevel }) => {
  return (
    <header className="flex justify-between">
      <select
        value={level}
        onChange={(event) => setLevel(Number(event.target.value))}
        className="bg-white px-2 py-1 rounded-sm"
      >
        <option value={1}>Level 1</option>
        <option value={2}>Level 2</option>
        <option value={3}>Level 3</option>
      </select>
      <div className="flex gap-2">
        <Button className="bg-positive text-white">시작</Button>
        <Button className="bg-negative text-white">중단</Button>
      </div>
    </header>
  );
};

export default BoardHeader;
