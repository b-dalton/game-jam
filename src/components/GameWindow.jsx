import React from "react";
import { useGameState } from "../game-state";

export const GameWindow = (props) => {
  const { count } = useGameState();
  return (
    <div>
      <p>Hello World: {count}</p>
    </div>
  );
};
