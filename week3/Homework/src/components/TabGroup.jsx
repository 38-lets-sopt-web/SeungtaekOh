import Button from "./Button";
const TabGroup = ({ currentTab, onChangeTab }) => {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => onChangeTab("game")}
        className={
          currentTab === "game"
            ? "bg-primary text-white"
            : "border border-primary bg-transparent text-primary"
        }
      >
        게임
      </Button>

      <Button
        onClick={() => onChangeTab("ranking")}
        className={
          currentTab === "ranking"
            ? "bg-primary text-white"
            : "border border-primary bg-transparent text-primary"
        }
      >
        랭킹
      </Button>
    </div>
  );
};
export default TabGroup;
