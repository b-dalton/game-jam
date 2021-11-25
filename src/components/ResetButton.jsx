import React from "react";
import { useGameState } from "../game-state";

export const ResetButton = () => {
  const { setCount } = useGameState();
  return (
    <button
      onClick={() => {
        setCount(0);
      }}
    >
      Reset
    </button>
  );
};
