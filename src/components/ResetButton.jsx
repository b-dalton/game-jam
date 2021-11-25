import React from "react";
import { useGameState } from "../game-state";
import { Button } from "@mui/material";


export const ResetButton = () => {
  const { resetTime } = useGameState();

  return <Button variant="outlined" onClick={resetTime}>Reset</Button>;
};
