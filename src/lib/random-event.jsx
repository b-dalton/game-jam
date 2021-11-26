import { getPhaseState } from "./game-phase";

const events = [
  {
    name: "New investor!",
    characterName: "Scribbly Pibbles",
    description:
      "I love your approach to akward office parties, and have invested $5,000 in your fledgling business!",
    type: "email",
    condition: ({ gameTime }) => {
      const { index } = getPhaseState(gameTime);

      return index === 1;
    },
    action: (state) => {
      return {
        ...state,
        currency: state.currency + 5000,
      };
    },
  },
  {
    name: "New investor!",
    characterName: "Pibbly Scribbles",
    description:
      "I hate your approach to akward office parties, but and have invested $5,000 in your fledgling business anyway in the hope you might change your ways!",
    type: "email",
    condition: ({ gameTime }) => {
      const { index } = getPhaseState(gameTime);

      return index === 1;
    },
    action: (state) => {
      return {
        ...state,
        currency: state.currency + 5000,
      };
    },
  },
  {
    name: "Coffee Beans now declard illegal contriband worldwide!",
    characterName: "@not.a.troll",
    description:
      "Following recent news that the production of coffee beans are the leading cause of global warming, the UN has outlawed possession of coffee beans. This has led to widespread panic globally as retail workers, civil servants, parents of new-borns and developers search for a replacement to that caffeine fix.",
    type: "clackerNews",
    condition: ({ gameTime }) => {
      const { index } = getPhaseState(gameTime);

      return index === 1;
    },
    joke: "lolololol, red bull for the winz 🚫☕️. covfefe drinkers are n00bz",
    image: "coffee",
    action: (state) => {
      return {
        ...state,
        employeeHappiness: state.employeeHappiness - 1,
      };
    },
  },
  {
    name: "Could we have some more office snacks please?",
    characterName: "Ivana Snack",
    description:
      "We're trying to work but there's just not enough snacks in the office! We've had to resort to running our own bake off just to get by...",
    type: "email",
    condition: ({ gameTime }) => {
      const { index } = getPhaseState(gameTime);

      return index === 1;
    },
    action: (state) => {
      return {
        ...state,
        employeeHappiness: state.employeeHappiness - 1,
        employeeHappinessChange: state.employeeHappinessChange - 0.02,
      };
    },
  },
  {
    name: "CEASE & DESIST: WE HAVE STOLEN YOUR IDEA PLEASE STOP USING IT IMMEDIATELY",
    characterName: "Facecrook Lawyers",
    description:
      "We liked your idea for musical office chairs so much that we've stolen it and now own it. Please refrain from using this idea any longer or face the wrath of our legal department.",
    type: "email",
    condition: ({ gameTime }) => {
      const { index } = getPhaseState(gameTime);

      return index === 1;
    },
    action: (state) => {
      return {
        ...state,
        employeeHappiness: state.employeeHappiness - 1,
        employeeHappinessChange: state.employeeHappinessChange - 0.02,
      };
    },
  },
  {
    name: "Notice of resignation!",
    characterName: "Mr Needsmore Cash",
    description:
      "Please accept this email as a notice of my resignation as of this morning. I will not be making a statement or appearing on the morning news, as I am not famous and nobody cares.",
    type: "email",
    condition: () => true,
    action: (state) => {
      return {
        ...state,
        humanEmployees: state.humanEmployees - 1,
        totalWorkforceSize: state.totalWorkforceSize - 1,
      };
    },
  },
];

export const getRandomEvent = (state) => {
  const shouldFindEvent = Math.random() < 0.02 ? true : false;
  // const shouldFindEvent = true;

  if (!shouldFindEvent) {
    return null;
  }

  const matchingEvents = events.filter((e) => e.condition(state));

  if (matchingEvents.length === 0) {
    return null;
  }

  return matchingEvents[Math.floor(Math.random() * matchingEvents.length)];
};
