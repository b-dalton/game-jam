import React, { useContext, useReducer } from "react";

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
  currency: 10000,
  currencyChange: 100,
  employeeHappiness: 5,
  employeeHappinessChange: -0.001,
  employees: 1,
  maximumEmployees: 5,
  occupiedEmployees: 0,
  activeEvent: null,
  signedContracts: [],
  companyName: null,
  techStack: null,
  logo: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "startEvent":
      if (state.gameStage !== GameStageEnum.RUNNING) {
        return state;
      }
      return {
        ...action.payload.action(state),
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
        companyName: action.payload.companyName,
        techStack: action.payload.techStack,
        logo: action.payload.logo,
      };
    case "pauseGame":
      return {
        ...state,
        gameStage: GameStageEnum.PAUSED,
      };
    case "resumeGame":
      return {
        ...state,
        gameStage: GameStageEnum.RUNNING,
      };
    case "tickTime":
      if (state.gameStage !== GameStageEnum.RUNNING) {
        return state;
      }

      const happinessMultiplier = state.employeeHappiness / 10;

      const stateAfterTick = {
        ...state,
        gameTime: state.gameTime + 1,
        currency: state.currency + state.currencyChange * happinessMultiplier,
        employeeHappiness:
          state.employeeHappiness + state.employeeHappinessChange,
      };

      window.localStorage.setItem("gameState", JSON.stringify(stateAfterTick));

      return stateAfterTick;
    case "resetGame":
      window.localStorage.removeItem("gameState");

      return initialState;
    case "purchaseItem":
      if (state.gameStage !== GameStageEnum.RUNNING) {
        return state;
      }

      if (state.currency < action.payload.price) {
        return state;
      }

      return {
        ...action.payload.action(state),
      };
    case "signContract":
      return {
        ...action.payload.action(state),
      };
    default:
      throw new Error(`Unexpected action type ${action.type}`);
  }
};

const getInitialState = () => {
  const storedGameState = window.localStorage.getItem("gameState");

  if (storedGameState) {
    return JSON.parse(storedGameState);
  }

  return initialState;
};

export const GameStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

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
