import { useEffect, useRef } from "react";

import { useGameState } from "../contexts/GameState";
import { getFixedEvent } from "../lib/fixed-event";
import { getRandomEvent } from "../lib/random-event";

export const BaseGameLoop = () => {
  const timerRef = useRef();
  const { state, dispatch } = useGameState();

  const { activeEvent, currency } = state;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      dispatch({ type: "tickTime" });

      if (currency < 0) {
        dispatch({ type: "loseGame", payload: "You ran out of money!" });
        return;
      }

      const fixedEvent = getFixedEvent(state);

      if (fixedEvent) {
        dispatch({ type: "startEvent", payload: fixedEvent });
      } else {
        if (!activeEvent) {
          const event = getRandomEvent(state);

          if (!event) {
            return;
          }

          dispatch({ type: "startEvent", payload: event });
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  });

  return null;
};
