import React from "react";
import { useGameState } from "../contexts/GameState";
import { Button } from "@mui/material";

export const ResetButton = () => {
  const { resetTime } = useGameState();

  return (
    <Button variant="outlined" onClick={resetTime}>
      Reset
    </Button>
  );
};
