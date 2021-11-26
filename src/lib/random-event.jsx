const events = [
  {
    name: "New investor!",
    description:
      "Scribbly Plibbles loves your approach to akward office parties, and has invested $5,000 in your fledling business!",
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

  if (!shouldFindEvent) {
    return null;
  }

  const matchingEvents = events.filter((e) => e.condition(state));

  return matchingEvents[Math.floor(Math.random() * matchingEvents.length)];
};
