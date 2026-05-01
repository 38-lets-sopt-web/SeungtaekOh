import BoardHeader from "./BoardHeader";
import BoardMain from "./BoardMain";
const BoardSection = ({ level, setLevel }) => {
  return (
    <div className="flex flex-col flex-1 p-3 bg-section rounded-2xl gap-2">
      <BoardHeader level={level} setLevel={setLevel} />
      <BoardMain level={level} />
    </div>
  );
};

export default BoardSection;
