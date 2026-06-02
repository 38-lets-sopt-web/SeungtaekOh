import { useState } from "react";
import Header from "./components/Header";
import GameSection from "./sections/gameSection/GameSection";
import RankingSection from "./sections/RankingSection";
function App() {
  const [currentTab, setCurrentTab] = useState("game");
  return (
    <div className="flex flex-col justify-center py-8 px-16 gap-6">
      <Header currentTab={currentTab} onChangeTab={setCurrentTab} />
      {currentTab === "game" ? <GameSection /> : <RankingSection />}
    </div>
  );
}

export default App;
