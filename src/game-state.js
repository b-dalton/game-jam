import React, { useCallback, useContext, useState } from "react";

export const GameStateContext = React.createContext({
  gameTime: 0,
  tickTime: () => {},
  resetTime: () => {},
});

const useGameTime = () => {
  const [gameTime, setGameTime] = useState(0);

  const tickTime = useCallback(() => {
    setGameTime(gameTime + 1);
  }, [gameTime]);

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
  const { gameTime, tickTime, resetTime } = useGameTime();

  return (
    <GameStateContext.Provider
      value={{
        gameTime,
        tickTime,
        resetTime,
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
