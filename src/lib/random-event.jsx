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
];

export const getRandomEvent = (state) => {
  const shouldFindEvent = Math.random() < 0.02 ? true : false;
  // const shouldFindEvent = true;

  if (!shouldFindEvent) {
    return null;
  }

  const matchingEvents = events.filter((e) => e.condition(state));

  return matchingEvents[Math.floor(Math.random() * matchingEvents.length)];
};
