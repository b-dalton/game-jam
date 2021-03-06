import { GameStateProvider } from "./contexts/GameState";
import { BaseGameLoop } from "./components/BaseGameLoop";
import { GameWindow } from "./components/GameWindow";
import "./App.css";

function App() {
  return (
    <GameStateProvider>
      <BaseGameLoop />
      <GameWindow />
    </GameStateProvider>
  );
}

export default App;
