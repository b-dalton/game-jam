export const getFixedEvent = (state) => {
  const fixedEvents = [
    {
      name: "Buyout or IPO",
      characterName: "Bought Works",
      description:
        "Wow, your company is growing really quickly. What do you want to do?",
      condition: (state) => state.gameTime === 1,
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
  ];

  const matchingEvent = fixedEvents.find((e) => e.condition(state));

  if (!matchingEvent) {
    return null;
  }

  return matchingEvent;
};
