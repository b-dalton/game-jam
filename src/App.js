import logo from "./logo.svg";
import { GameStateProvider } from "./game-state";
import { GameWindow } from "./components/GameWindow";
import "./App.css";

function App() {
  return (
    <GameStateProvider>
      <GameWindow />
    </GameStateProvider>
  );
}

export default App;
