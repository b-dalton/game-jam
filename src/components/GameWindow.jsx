import React from "react";
import { EventDialog } from "./EventDialog";

import { GamePhase } from "./GamePhase";
import StartScreen from "./StartScreen";

export const GameWindow = (props) => {
  return (
    <div>
      <StartScreen />

      <EventDialog />
      <GamePhase />
    </div>
  );
};
