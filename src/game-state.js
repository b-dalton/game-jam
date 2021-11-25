import React, { useCallback, useContext, useState } from "react";

export const GameStateContext = React.createContext({
  gameTime: 0,
  tickTime: () => {},
  resetTime: () => {},
  activeEvent: null,
  startEvent: () => {},
  completeEvent: () => {},
});

export const GameStageEnum = {
  RUNNING: "running",
  PAUSED: "paused",
  FINISHED: "finished",
};

const useGameTime = (gameStage) => {
  const [gameTime, setGameTime] = useState(0);

  const tickTime = useCallback(() => {
    if (gameStage === GameStageEnum.RUNNING) {
      setGameTime(gameTime + 1);
    }
  }, [gameStage, gameTime]);

  const resetTime = useCallback(() => {
    setGameTime(0);
  }, []);

  return {
    gameTime,
    tickTime,
    resetTime,
  };
};

export const GameStateProvider = ({ children }) => {
  const [gameStage, setGameStage] = useState(GameStageEnum.FINISHED);
  const { gameTime, tickTime, resetTime } = useGameTime(gameStage);
  const [activeEvent, setActiveEvent] = useState(null);

  const startEvent = useCallback(
    (event) => {
      if (gameStage === GameStageEnum.RUNNING) {
        setActiveEvent(event);
      }
    },
    [gameStage]
  );

  const completeEvent = useCallback(() => {
    if (gameStage === GameStageEnum.RUNNING) {
      setActiveEvent(null);
    }
  }, [gameStage]);

  return (
    <GameStateContext.Provider
      value={{
        gameTime,
        tickTime,
        resetTime,
        setGameStage,
        activeEvent,
        startEvent,
        completeEvent,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameState = () => {
  const gameState = useContext(GameStateContext);
  return gameState;
};
