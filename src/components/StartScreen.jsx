import { Button } from "@mui/material";
import React from "react";
import "./StartScreen.css"

const StartScreen = () => {
  return (
    <div className="start-screen">
      <h1>Welcome to the Made Tech Simulator!</h1>
      {/* // <button>Start your Tech Empire!</button> */}
      <Button variant="contained">Start your own Tech Empire!</Button>
    </div>
  );
};

export default StartScreen;
