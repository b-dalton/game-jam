import { Button } from "@mui/material";
import React from "react";
import { useGameState } from "../contexts/GameState";
import "./StartScreen.css";
import { GameSetupScreen } from "./GameSetUpScreen";


const StartScreen = () => {
  const { dispatch } = useGameState();

  return (
    <div className="start-screen">
      <h1>Welcome to the Made Tech Simulator!</h1>
      <GameSetupScreen  />
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "startGame" })}
      >
        Start your own Tech Empire!
      </Button>
    </div>
  );
};

export default StartScreen;
