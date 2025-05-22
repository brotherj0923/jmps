import { useState } from "react";
import Home from "./pages/Home";
import TransitionScreen from "./components/TransitionScreen";

function App() {
  const [selectedArea, setSelectedArea] = useState(null);

  return selectedArea ? (
    <TransitionScreen />
  ) : (
    <Home onSelectArea={(area) => setSelectedArea(area)} />
  );
}

export default App;