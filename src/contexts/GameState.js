import React, { useContext, useReducer } from "react";

export const GameStageEnum = {
  LAUNCH: "launch",
  RUNNING: "running",
  PAUSED: "paused",
  LOST: "lost",
  WON: "won",
};

export const GameStateContext = React.createContext({});

const initialState = {
  gameStage: GameStageEnum.LAUNCH,
  gameTime: 0,
  currency: 20000,
  currencyChange: 200,
  employeeHappiness: 10,
  employeeHappinessChange: -0.001,
  totalWorkforceSize: 1,
  humanEmployees: 1,
  robotEmployees: 0,
  maximumEmployees: 5,
  occupiedEmployees: 0,
  activeEvent: null,
  signedContracts: [],
  companyName: null,
  techStack: null,
  logo: null,
  loseReason: null,
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
    case "startChoiceEvent":
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
    case "restartGame":
      window.localStorage.removeItem("gameState");

      return {
        ...initialState,
        companyName: state.companyName,
        logo: state.logo,
        techStack: state.techStack,
        gameStage: GameStageEnum.RUNNING,
      };
    case "loseGame":
      window.localStorage.removeItem("gameState");

      return {
        ...state,
        gameStage: GameStageEnum.LOST,
        loseReason: action.payload,
      };
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
    case "makeChoice":
      return {
        ...action.payload.event.action(state, action.payload.choice),
        activeEvent: null,
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
