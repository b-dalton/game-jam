import { useEffect, useRef } from "react";
import { useGameState } from "../game-state";

export const BaseGameLoop = () => {
  const timerRef = useRef();
  const { incrementCount } = useGameState();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      incrementCount();
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  });
  return null;
};
