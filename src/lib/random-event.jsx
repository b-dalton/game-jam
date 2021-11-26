const events = [
  {
    name: "New investor!",
    characterName: "Scribbly Pibbles",
    description:
      "I love your approach to akward office parties, and have invested $5,000 in your fledling business!",
    type:
      "email",
    condition: (state) => state.gameTime >= 0 && state.gameTime < 10000,
    action: (state) => {
      return {
        ...state,
        currency: state.currency + 5000,
      };
    },
  },
  {
    name: "Coffee Beans now declard illegal contriband worldwide!",
    characterName: "@java.afficionado",
    description:
      "Following recent news that the production of coffee beans are the leading cause of global warming, the UN has outlawed possession of coffee beans. This has led to widespread panic globally as retail workers, civil servants, parents of new-borns and developers search for a replacement to that caffeine fix.",
    type:
      "clackerNews",
      condition: (state) => state.gameTime >= 0 && state.gameTime < 10000,
    joke: "lolololol, red bull for the winz 🚫☕️",
    image: "../../lib/images/coffee-beans.jpeg",
    action: (state) => {
      return {
        ...state,
        currency: state.currency + 5000,
      };
    },
  },
];

export const getRandomEvent = (state) => {
  // const shouldFindEvent = Math.random() < 0.02 ? true : false;
  const shouldFindEvent = true;

  if (!shouldFindEvent) {
    return null;
  }

  const matchingEvents = events.filter((e) => e.condition(state));

  return matchingEvents[Math.floor(Math.random() * matchingEvents.length)];
};
