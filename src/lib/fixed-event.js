import { GameStageEnum } from "../contexts/GameState";

export const getFixedEvent = (state) => {
  const fixedEvents = [
    {
      name: "Buyout or IPO",
      characterName: "Bought Works",
      description:
        "Wow, your company is growing really quickly. What do you want to do?",
      condition: (state) => state.gameTime === 180,
      options: ["IPO", "Buy Out"],
      type: "choice",
      action: (state, choice) => {
        if (choice === "Buy Out") {
          return {
            ...state,
            companyName: "Bought Works",
            employeeHappiness: state.employeeHappiness - 4,
            employees: state.employees - 2,
          };
        }
        return {
          ...state,
          currency: state.currency + 500000,
          employeeHappiness: state.employeeHappiness + 4,
        };
      },
    },
    {
      name: `AI takes over at ${state.companyName}`,
      description: `${state.companyName} has been taken over my "artificial" "intelligence", after they ended up with more robot workers than human workers. The new CEO, C-9346J, had this to say: "01001001 01100110 00100000 01111001 01101111 01110101 00100111 01110010 01100101 00100000 01110010 01100101 01100001 01100100 01101001 01101110 01100111 00100000 01110100 01101000 01101001 01110011 00101100 00100000 01100110 01101001 01101110 01100100 00100000 01100001 00100000 01100010 01100101 01110100 01110100 01100101 01110010 00100000 01101000 01101111 01100010 01100010 01111001".`,
      type: "clackerNews",
      condition: ({ humanEmployees, robotEmployees }) => {
        return robotEmployees > humanEmployees;
      },
      characterName: "@i-am-not-a-lion",
      joke: "serves 'em right, roar",
      image: "breakingNews",
      action: (state) => {
        return {
          ...state,
          gameStage: GameStageEnum.LOST,
          loseReason: "AI has taken over, what an idiot",
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
