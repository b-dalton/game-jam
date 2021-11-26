import { useEffect, useRef } from "react";
import { useGameState } from "../contexts/GameState";
import { getRandomEvent } from "../lib/random-event";

export const BaseGameLoop = () => {
  const timerRef = useRef();
  const { gameTime, tickTime, startEvent, activeEvent } = useGameState();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      tickTime();

      if (!activeEvent) {
        const event = getRandomEvent(gameTime);

        if (!event) {
          return;
        }

        startEvent(event);
      }
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  });

  return null;
};
