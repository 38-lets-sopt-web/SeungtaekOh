import ButtonGroup from "./TabGroup";

const Header = ({ currentTab, onChangeTab }) => {
  return (
    <div className="flex gap-3 w-full items-center bg-section p-4 rounded-2xl">
      <label className="font-bold text-lg">두더지 게임</label>
      <ButtonGroup currentTab={currentTab} onChangeTab={onChangeTab} />
    </div>
  );
};
export default Header;
