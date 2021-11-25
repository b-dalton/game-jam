const events = [
  {
    name: "Some event",
    condition: ({ gameTime }) => gameTime > 0 && gameTime < 10000,
  },
];

export const getRandomEvent = (gameTime) => {
  const shouldFindEvent = Math.random() < 1 ? true : false;

  if (!shouldFindEvent) {
    return null;
  }

  const matchingEvents = events.filter((e) => e.condition({ gameTime }));

  return matchingEvents[Math.floor(Math.random() * matchingEvents.length)];
};
