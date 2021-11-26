import { GameStageEnum } from "../contexts/GameState";

export const getFixedEvent = (state) => {
  const fixedEvents = [
    {
      name: `${state.companyName} floats on the stock market`,
      characterName: "@financial-grimes",
      description: `${state.companyName} has floated on the stock market today, evidenced by their executive team seen stumbling around the London Stock Exchange at 8:30am blind drunk. ${state.companyName} has netted a cool $420,000 as part of the float.`,
      type: "clackerNews",
      condition: ({ gameTime }) => {
        return gameTime === 180;
      },
      joke: "",
      image: "coffee",
      action: (state) => {
        return {
          ...state,
          currency: state.currency + 420000,
        };
      },
    },
    {
      name: `${state.companyName} becomes the greatest tech provider in the whole galaxy!`,
      characterName: "@space-in-papers",
      description: `${state.companyName} has beaten out their rival, Break Tech, to become the greatest tech provider in all of the galaxy. ${state.companyName}'s CEO said in a statement: "I'm ruddy thrilled I am, what a bloody win. I'm so proud of all my staff, but especially of myself, who somehow managed to make it through this entire game, I mean, simulation, I mean, real life experience... without losing". Arch rival CEO Roary (of the lion people planet Mufasa) said: "I'm devastated, roar. After everything we did to undermine their staff, their executive board, and their weird office parties, I can't believe they have become the best. You know what they say though, growl..., if you can't beat 'em, join em! I'm taking up a job as their new office gardener! Sayonara, purr".`,
      type: "clackerNews",
      condition: ({ gameTime }) => {
        return gameTime >= 900;
      },
      joke: "u wot m8",
      image: "coffee",
      action: (state) => {
        return {
          ...state,
        };
      },
    },
  ];

  const matchingEvent = fixedEvents.find((e) => e.condition(state));

  if (!matchingEvent) {
    return null;
  }

  return matchingEvent;
};
