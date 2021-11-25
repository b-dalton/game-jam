import { Button } from "@mui/material";
import React from "react";
import { useGameState, GameStageEnum } from "../game-state";
import "./StartScreen.css"

const StartScreen = () => {
  const { setGameStage } = useGameState();
  return (
    <div className="start-screen">
      <h1>Welcome to the Made Tech Simulator!</h1>
      <Button variant="contained" onClick={() => setGameStage(GameStageEnum.RUNNING)}>Start your own Tech Empire!</Button>
    </div>
  );
};

export default StartScreen;
