import React from "react";
import { useGameState } from "../game-state";

export const ResetButton = () => {
  const { resetTime } = useGameState();

  return <button onClick={resetTime}>Reset</button>;
};
