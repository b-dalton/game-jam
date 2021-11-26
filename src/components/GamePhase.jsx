import { useGameState } from "../contexts/GameState";

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
  const {
    state: { gameTime, currency, companyName, techStack },
  } = useGameState();

  const minutesIntoGame = secondsToFlooredMinutes(gameTime);
  const gamePhase = getPhaseName(minutesIntoGame);

  return (
    <div>
      <p>
        Time: {minutesIntoGame} minutes {gameTime % 60} seconds (phase:{" "}
        {gamePhase})
      </p>
      <p>Cash: ${currency}</p>
    </div>
    <div>
      <p>Company Name: {companyName}</p>
      <p>Tech Stack: {techStack}</p>
    </div>
    </div>
  );
};
