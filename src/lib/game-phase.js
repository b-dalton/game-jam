import officeStartup from "./images/office-startup.png";
import officeIpo from "./images/office-ipo.png";
import officeInternational from "./images/office-international.png";
import officeSpace from "./images/office-space.png";

const secondsToFlooredMinutes = (seconds) => {
  return Math.floor(seconds / 60);
};

export const getPhaseState = (gameTime) => {
  const minutesIntoGame = secondsToFlooredMinutes(gameTime);

  if (minutesIntoGame < 3) {
    return {
      name: "Start up",
      index: 1,
      image: officeStartup,
      progress: (gameTime / 180) * 100,
    };
  }

  if (minutesIntoGame < 7) {
    return {
      name: "IPO",
      index: 2,
      image: officeIpo,
      progress: ((gameTime - 180) / 240) * 100,
    };
  }

  if (minutesIntoGame < 12) {
    return {
      name: "International",
      index: 3,
      image: officeInternational,
      progress: ((gameTime - 420) / 300) * 100,
    };
  }

  return {
    name: "Intergalactic",
    index: 4,
    image: officeSpace,
    progress: 100,
  };
};
