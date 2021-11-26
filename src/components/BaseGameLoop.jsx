import { useEffect, useRef } from "react";
import { useGameState } from "../contexts/GameState";
import { getRandomEvent } from "../lib/random-event";

export const BaseGameLoop = () => {
  const timerRef = useRef();
  const { state, dispatch } = useGameState();

  const { activeEvent } = state;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      dispatch({ type: "tickTime" });

      if (!activeEvent) {
        const event = getRandomEvent(state);

        if (!event) {
          return;
        }

        dispatch({ type: "startEvent", payload: event });
      }
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  });

  return null;
};
