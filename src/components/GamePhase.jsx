import { useGameState } from "../game-state";

const getPhaseName = (minutesIntoGame) => {
  if (minutesIntoGame < 3) {
    return "Start up";
  }

  if (minutesIntoGame < 7) {
    return "IPO";
  }

  if (minutesIntoGame < 12) {
    return "International";
  }

  return "Intergalactic";
};

const secondsToFlooredMinutes = (seconds) => {
  return Math.floor(seconds / 60);
};

export const GamePhase = () => {
  const { gameTime } = useGameState();

  const minutesIntoGame = secondsToFlooredMinutes(gameTime);
  const gamePhase = getPhaseName(minutesIntoGame);

  return (
    <div>
      Time: {minutesIntoGame} minutes {gameTime % 60} seconds (phase:{" "}
      {gamePhase})
    </div>
  );
};
