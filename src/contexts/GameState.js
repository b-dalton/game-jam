import React, { useCallback, useContext, useState } from "react";

export const GameStageEnum = {
  LAUNCH: "launch",
  RUNNING: "running",
  PAUSED: "paused",
  FINISHED: "finished",
};

export const GameStateContext = React.createContext({
  gameStage: GameStageEnum.LAUNCH,
  gameTime: 0,
  tickTime: () => {},
  resetTime: () => {},
  activeEvent: null,
  startEvent: () => {},
  completeEvent: () => {},
});

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
  const [gameStage, setGameStage] = useState(GameStageEnum.LAUNCH);
  const { gameTime, tickTime, resetTime } = useGameTime(gameStage);
  const [activeEvent, setActiveEvent] = useState(null);
  const [companyName, setCompanyName] = useState("");
	const [techStack, setTechStack] = useState("");
  
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

  const startGame = useCallback(() => {
    setGameStage(GameStageEnum.RUNNING);
  }, []);

  const pauseGame = useCallback(() => {
    setGameStage(GameStageEnum.PAUSED);
  }, []);

  const setCompanyDetails = ({companyName, techStack}) => {
		setCompanyName(companyName);
		setTechStack(techStack);
	};

  return (
    <GameStateContext.Provider
      value={{
        gameTime,
        tickTime,
        resetTime,
        gameStage,
        startGame,
        pauseGame,
        activeEvent,
        startEvent,
        completeEvent,
        companyName,
				techStack,
        setCompanyDetails,
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
