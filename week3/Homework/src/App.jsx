import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [currentTab, setCurrentTab] = useState("game");
  return (
    <div className="flex justify-center py-8 px-16">
      <Header currentTab={currentTab} onChangeTab={setCurrentTab} />
    </div>
  );
}

export default App;
