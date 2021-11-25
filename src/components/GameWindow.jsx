import React from "react";

import { GamePhase } from "./GamePhase";
import { ResetButton } from "./ResetButton";

export const GameWindow = (props) => {
  return (
    <div>
      <GamePhase />

      <ResetButton />
    </div>
  );
};
