const secondsToFlooredMinutes = (seconds) => {
  return Math.floor(seconds / 60);
};

export const getPhaseState = (gameTime) => {
  const minutesIntoGame = secondsToFlooredMinutes(gameTime);

  if (minutesIntoGame < 3) {
    return { name: "Start up", index: 1, progress: (gameTime / 180) * 100 };
  }

  if (minutesIntoGame < 7) {
    return { name: "IPO", index: 2, progress: ((gameTime - 180) / 240) * 100 };
  }

  if (minutesIntoGame < 12) {
    return {
      name: "International",
      index: 3,
      progress: ((gameTime - 420) / 300) * 100,
    };
  }

  return { name: "Intergalactic", index: 4, progress: 100 };
};
