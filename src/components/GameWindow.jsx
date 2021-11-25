import React from "react";
import { useGameState } from "../game-state";
import { ResetButton } from "./ResetButton";
import StartScreen from "./StartScreen";

export const GameWindow = (props) => {
  const { count } = useGameState();
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <StartScreen />
      {/* <p>Hello World: {count}</p>
      <ResetButton /> */}
    </div>
  );
};
