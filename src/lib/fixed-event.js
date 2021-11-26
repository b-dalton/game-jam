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
      name: "Buyout or IPO",
      characterName: "Bought Works",
      description: "Wow, your company is growing really quickly. What do you want to do?",
      condition: (state) => state.gameTime === 200,
      options: ["IPO", "Buy Out"],
      type: "choice",
      action: (state, choice) => {
        if (choice === "Buy Out")
          return {
            ...state,
            currency: state.currency + 500000,
            companyName: (state.companyName = "Bought Works"),
            employeeHappiness: state.employeeHappiness - 4
          };
        return {
          ...state,
          employeeHappiness: state.employeeHappiness + 4,
          employees: state.employees - 2
        };
      },
    },
    // {
    //   name: "Would you like to pivot the company into Crypto?",
    //   characterName: "Pivot into Crypto",
    //   description: "Crypto currencies are becoming increasingly popular. Tempted to get on the Crypto train?",
    //   type: "choice",
    //   condition: (state) => state.gameTime === 10000,
    //   action: (state, choice) => {
    //     if (choice === "Yes")
    //       return {
    //         ...state,
    //         currency: state.currency - 50000,
    //         employeeHappiness: state.employeeHappiness - 10
    //       };
    //     return {
    //       ...state,
    //       employeeHappiness: state.employeeHappiness +4
    //     }
    //   },
    // },
  ];

  const matchingEvent = fixedEvents.find((e) => e.condition(state));

  if (!matchingEvent) {
    return null;
  }

  return matchingEvent;
};
