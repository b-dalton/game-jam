import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useGameState } from "../contexts/GameState";
import { getPhaseState } from "../lib/game-phase";

const contracts = [
  {
    id: "bins-r-us",
    name: "Bins-r-us",
    description:
      "Pls help us with the bin situation, it's overflowing out here!",
    value: 950,
    recurringValue: 25,
    requiredTeamSize: 1,
    condition: () => true,
    action: (state) => {
      return {
        ...state,
        currency: state.currency + 950,
        currencyChange: state.currencyChange + 25,
        occupiedEmployees: state.occupiedEmployees + 1,
        signedContracts: [...state.signedContracts, "bins-r-us"],
      };
    },
  },
  {
    id: "nasa-moon-base",
    name: "NASA Moon Base",
    description:
      "You heard us right, NASA needs an exciting team to help us build our new lunar base",
    value: 15000,
    recurringValue: 150,
    requiredTeamSize: 25,
    condition: ({ gameTime }) => {
      const { index } = getPhaseState(gameTime);

      return index >= 3;
    },
    action: (state) => {
      return {
        ...state,
        currency: state.currency + 15000,
        currencyChange: state.currencyChange + 150,
        occupiedEmployees: state.occupiedEmployees + 1,
        signedContracts: [...state.signedContracts, "nasa-moon-base"],
      };
    },
  },
];

export const Marketplace = () => {
  const { state, dispatch } = useGameState();

  const { employees, occupiedEmployees, signedContracts } = state;

  const availableContracts = contracts.filter(
    ({ id }) => !signedContracts.includes(id)
  );

  const signedContractsList = contracts.filter(({ id }) =>
    signedContracts.includes(id)
  );

  const freeEmployees = employees - occupiedEmployees;

  return (
    <>
      <Typography variant="h6" component="h2">
        Available contracts{" "}
      </Typography>
      <List>
        {availableContracts.length === 0
          ? "There are no open contracts on the marketplace right now..."
          : availableContracts.map((item, index) => (
              <ListItem disablePadding>
                <ListItemButton
                  disabled={
                    !item.condition(state) ||
                    freeEmployees < item.requiredTeamSize
                  }
                  onClick={() => {
                    dispatch({ type: "signContract", payload: item });
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <>
                        <Typography variant="body2" color="text.primary">
                          {item.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          — Value: ${item.value.toLocaleString()} up front and $
                          {item.recurringValue.toLocaleString()} per second
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          — Required Team Size: {item.requiredTeamSize} (you
                          have {freeEmployees} free employee
                          {freeEmployees === 1 ? "" : "s"})
                        </Typography>
                      </>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
      </List>

      <Divider
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      />

      <Typography variant="h6" component="h2">
        Signed contracts{" "}
      </Typography>
      <List>
        {signedContractsList.length === 0
          ? "You haven't signed any contracts yet..."
          : signedContractsList.map((item, index) => (
              <ListItem disablePadding>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.primary">
                        {item.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        — Value: ${item.value.toLocaleString()} up front and $
                        {item.recurringValue.toLocaleString()} per second
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        — Team on site: {item.requiredTeamSize}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
      </List>
    </>
  );
};
