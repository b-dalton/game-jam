import React from "react";
import { GameStageEnum, useGameState } from "../contexts/GameState";
import { EventDialog } from "./EventDialog";

import { GamePhase } from "./GamePhase";
import StartScreen from "./StartScreen";

export const GameWindow = () => {
  const { gameStage, pauseGame, startGame } = useGameState();

  return (
    <div>
      {gameStage === GameStageEnum.LAUNCH && <StartScreen />}

      {gameStage === GameStageEnum.RUNNING && (
        <>
          <GamePhase />
          <EventDialog />
          <button onClick={pauseGame}>Pause game</button>
        </>
      )}

      {gameStage === GameStageEnum.PAUSED && (
        <>
          <GamePhase />
          <div>Paused...</div>
          <button onClick={startGame}>Resume game</button>
        </>
      )}

      {gameStage === GameStageEnum.FINISHED && <div>End of game!</div>}
    </div>
  );
};
