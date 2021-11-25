import { Button } from "@mui/material";
import React from "react";
import { useGameState } from "../game-state";
import "./StartScreen.css"

const StartScreen = () => {
  const { resetTime } = useGameState();
  return (
    <div className="start-screen">
      <h1>Welcome to the Made Tech Simulator!</h1>
      <Button variant="contained" onClick={resetTime}>Start your own Tech Empire!</Button>
    </div>
  );
};

export default StartScreen;