import React from "react";
import { useGameState } from "../contexts/GameState";
import { Button } from "@mui/material";

export const ResetButton = () => {
  const { dispatch } = useGameState();

  return (
    <Button variant="outlined" onClick={() => dispatch({ type: "resetTime" })}>
      Reset
    </Button>
  );
};
