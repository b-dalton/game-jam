import React from "react";
import { useGameState } from "../game-state";
import { ResetButton } from "./ResetButton";

export const GameWindow = (props) => {
  const { count } = useGameState();
  return (
    <div>
      <p>Hello World: {count}</p>
      <ResetButton />
    </div>
  );
};
