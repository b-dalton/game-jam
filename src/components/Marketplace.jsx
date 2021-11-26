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
    id: "wonky-buildings",
    name: "Help us develop our wonky buildings policy",
    description:
      "We're looking for a team of agile experts to join us to help us develop our policy for buildings that need to be more wonky. The ideal candidates will already work in a really wonky office, perhaps with low beams that pose risks to tall people too.",
    value: 1500,
    recurringValue: 50,
    requiredTeamSize: 3,
    condition: () => true,
    action: (state) => {
      return {
        ...state,
        currency: state.currency + 1500,
        currencyChange: state.currencyChange + 50,
        occupiedEmployees: state.occupiedEmployees + 3,
        signedContracts: [...state.signedContracts, "wonky-buildings"],
      };
    },
  },
  {
    id: "post-it-power-house",
    name: "Post it power house",
    description:
      "We hate post its, but can't stop using them. Like literally we have post its all over the place. I can't even see my screen as I'm typing this. Help us with this addiction, please, I beg of you!",
    value: 4000,
    recurringValue: 30,
    requiredTeamSize: 2,
    condition: () => true,
    action: (state) => {
      return {
        ...state,
        currency: state.currency + 4000,
        currencyChange: state.currencyChange + 30,
        occupiedEmployees: state.occupiedEmployees + 2,
        signedContracts: [...state.signedContracts, "post-it-power-house"],
      };
    },
  },
  {
    id: "new-country",
    name: "Craft a new country",
    description:
      "Look, we're as fed up of this country as you are. Let's start a new one! What could possibly go wrong?!",
    value: 120000,
    recurringValue: 550,
    requiredTeamSize: 10,
    condition: ({ gameTime }) => {
      const { index } = getPhaseState(gameTime);

      return index >= 3;
    },
    action: (state) => {
      return {
        ...state,
        currency: state.currency + 120000,
        currencyChange: state.currencyChange + 550,
        occupiedEmployees: state.occupiedEmployees + 10,
        signedContracts: [...state.signedContracts, "new-country"],
      };
    },
  },
  {
    id: "legacy-transformation",
    name: "Help us with our legacy transformation",
    description:
      "Greetings, we are the House of Lords. After much deliberation and other expensive filibustering we have concluded we are entirely ineffective and are in dire need of a complete legacy transformation. The scope of the transformation will, of course, be entirely constrained to pointless superficial elements of the House, but otherwise will be regarded as a great success. Please submit your applications by noon tomorrow. Regards, whoever the hell we are.",
    value: 600000,
    recurringValue: 5000,
    requiredTeamSize: 30,
    condition: ({ gameTime }) => {
      const { index } = getPhaseState(gameTime);

      return index >= 2;
    },
    action: (state) => {
      return {
        ...state,
        currency: state.currency + 600000,
        currencyChange: state.currencyChange + 5000,
        occupiedEmployees: state.occupiedEmployees + 30,
        signedContracts: [...state.signedContracts, "legacy-transformation"],
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

  const { totalWorkforceSize, occupiedEmployees, signedContracts } = state;

  const availableContracts = contracts.filter(
    ({ id, condition }) => !signedContracts.includes(id)
  );

  const signedContractsList = contracts.filter(({ id }) =>
    signedContracts.includes(id)
  );

  const freeEmployees = totalWorkforceSize - occupiedEmployees;

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
