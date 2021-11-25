import React, { useCallback, useContext, useState } from "react";

export const GameStateContext = React.createContext({});

export const GameStateProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <GameStateContext.Provider
      value={{
        count,
        incrementCount,
        setCount,
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
