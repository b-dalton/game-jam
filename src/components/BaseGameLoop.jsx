import { useEffect, useRef } from "react";
import { useGameState } from "../game-state";

export const BaseGameLoop = () => {
  const timerRef = useRef();
  const { updateCount } = useGameState();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      updateCount();
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  });
  return null;
};
