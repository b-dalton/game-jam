import {
  Chip,
  Stack,
  CircularProgress,
  Paper,
  Button,
} from "@mui/material";
import { GameStageEnum, useGameState } from "../contexts/GameState";

const getPhaseState = (gameTime) => {
  const minutesIntoGame = secondsToFlooredMinutes(gameTime);

  if (minutesIntoGame < 3) {
    return { name: "Start up", progress: (gameTime / 180) * 100 };
  }

  if (minutesIntoGame < 7) {
    return { name: "IPO", progress: ((gameTime - 180) / 240) * 100 };
  }

  if (minutesIntoGame < 12) {
    return { name: "International", progress: ((gameTime - 420) / 300) * 100 };
  }

  return { name: "Intergalactic", progress: 100 };
};

const secondsToFlooredMinutes = (seconds) => {
  return Math.floor(seconds / 60);
};

export const Toolbar = () => {
  const {
    state: { currency, gameTime, gameStage },
    dispatch,
  } = useGameState();

  const { name, progress } = getPhaseState(gameTime);

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        justifyContent: "space-between",
        marginBottom: "2rem",
      }}
    >
      <Stack direction="row" spacing={1}>
        <CircularProgress
          variant="determinate"
          color="secondary"
          value={progress}
        />
        <Chip color="secondary" label={name} />
        <Chip color="primary" label={`$${currency.toLocaleString()}`} />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Button
          onClick={() =>
            dispatch({
              type:
                gameStage === GameStageEnum.RUNNING ? "pauseGame" : "startGame",
            })
          }
        >
          {gameStage === GameStageEnum.RUNNING ? "Pause" : "Resume"}
        </Button>
      </Stack>
    </Paper>
  );
};
