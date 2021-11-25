import React, { useContext } from "react";
// account property starts at 0
// context global state

export const GameStateContext = React.createContext({});

export const GameStateProvider = ({ children }) => {
  return (
    <GameStateContext.Provider
      value={{
        count: 0,
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
