import { useEffect, useRef } from "react";
import { useGameState } from "../game-state";

export const BaseGameLoop = () => {
  const timerRef = useRef();
  const { tickTime } = useGameState();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      tickTime();
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  });

  return null;
};
