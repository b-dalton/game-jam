import React, { useCallback, useContext, useReducer, useState } from "react";

export const GameStageEnum = {
  LAUNCH: "launch",
  RUNNING: "running",
  PAUSED: "paused",
  FINISHED: "finished",
};

export const GameStateContext = React.createContext({});

const initialState = {
  gameStage: GameStageEnum.LAUNCH,
  gameTime: 0,
  activeEvent: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "startEvent":
      if (state.gameStage !== GameStageEnum.RUNNING) {
        return state;
      }

      return {
        ...state,
        activeEvent: action.payload,
      };
    case "completeEvent":
      if (state.gameStage !== GameStageEnum.RUNNING) {
        return state;
      }

      return {
        ...state,
        activeEvent: null,
      };
    case "startGame":
      return {
        ...state,
        gameStage: GameStageEnum.RUNNING,
      };
    case "pauseGame":
      return {
        ...state,
        gameStage: GameStageEnum.PAUSED,
      };
    case "tickTime":
      if (state.gameStage !== GameStageEnum.RUNNING) {
        return state;
      }

      return {
        ...state,
        gameTime: state.gameTime + 1,
      };
    case "resetTime":
      return {
        ...state,
        gameTime: 0,
      };
    default:
      throw new Error(`Unexpected action type ${action.type}`);
  }
};

export const GameStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameStateContext.Provider
      value={{
        state,
        dispatch,
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
