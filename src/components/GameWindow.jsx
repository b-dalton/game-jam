import React from "react";

import { GamePhase } from "./GamePhase";
import { ResetButton } from "./ResetButton";
import StartScreen from "./StartScreen";

export const GameWindow = (props) => {
  return (
    <div>
      <StartScreen />
      <GamePhase />

      <ResetButton />
    </div>
  );
};
