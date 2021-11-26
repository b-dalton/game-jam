import { Container } from "@mui/material";
import React from "react";
import { GameStageEnum, useGameState } from "../contexts/GameState";
import { EventDialog } from "./EventDialog";

import StartScreen from "./StartScreen";
import { TitleBar } from "./TitleBar";
import { Toolbar } from "./Toolbar";

export const GameWindow = () => {
  const {
    state: { gameStage },
  } = useGameState();

  return (
    <Container
      sx={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TitleBar />

      {gameStage === GameStageEnum.LAUNCH && <StartScreen />}

      {gameStage === GameStageEnum.RUNNING && (
        <>
          <Toolbar />
          <EventDialog />
        </>
      )}

      {gameStage === GameStageEnum.PAUSED && (
        <>
          <Toolbar />
          <div>Paused...</div>
        </>
      )}

      {gameStage === GameStageEnum.FINISHED && <div>End of game!</div>}
    </Container>
  );
};
