import { useEffect, useRef } from "react";
import { useGameState } from "../contexts/GameState";
import { getRandomEvent } from "../lib/random-event";

export const BaseGameLoop = () => {
  const timerRef = useRef();
  const {
    state: { gameTime, activeEvent },
    dispatch,
  } = useGameState();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      dispatch({ type: "tickTime" });

      if (!activeEvent) {
        const event = getRandomEvent(gameTime);

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
