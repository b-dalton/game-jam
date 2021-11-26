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
  const { gameTime, companyName, techStack } = useGameState();
  console.log("company name: ", companyName)
  console.log("tech stack: ", techStack)

  const minutesIntoGame = secondsToFlooredMinutes(gameTime);
  const gamePhase = getPhaseName(minutesIntoGame);

  return (
    <div>
    <div>
      Time: {minutesIntoGame} minutes {gameTime % 60} seconds (phase:{" "}
      {gamePhase})
    </div>
    <div>
      <p>Company Name: {companyName}</p>
      <p>Tech Stack: {techStack}</p>
    </div>
    </div>
  );
};
