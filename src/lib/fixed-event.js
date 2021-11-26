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
  ];

  const matchingEvent = fixedEvents.find((e) => e.condition(state));

  if (!matchingEvent) {
    return null;
  }

  return matchingEvent;
};
