import React from "react";

import { GamePhase } from "./GamePhase";
import StartScreen from "./StartScreen";

export const GameWindow = (props) => {
  return (
    <div>
      <StartScreen />
      <GamePhase />
    </div>
  );
};
