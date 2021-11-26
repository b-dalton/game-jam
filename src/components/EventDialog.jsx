import { Container, Paper } from "@mui/material";
import EventUI from "./EventUI";
import { useGameState } from "../contexts/GameState";

export const EventDialog = () => {
  const {
    state: { activeEvent },
    dispatch,
  } = useGameState();

  if (!activeEvent) {
    return null;
  }

  return (
    <Container
      sx={{
        margin: "auto",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          padding: "2rem",
        }}
      >
        <p>EVENT: {activeEvent.name}</p>
        <EventUI />
        <button onClick={() => dispatch({ type: "completeEvent" })}>
          Continue
        </button>
      </Paper>
    </Container>
  );
};
