import { Paper, Stack, Typography } from "@mui/material";
import { GameStageEnum, useGameState } from "../contexts/GameState";
import selectedLogo from "../contexts/selectedLogo";

export const TitleBar = () => {

  const { state } = useGameState();

  return (
    <Paper
      elevation={2}
      sx={{
        marginBottom: "1rem",
        padding: "1rem",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {state.gameStage === GameStageEnum.RUNNING ? selectedLogo(state.logo) : null}
        <Typography variant="h4" component="h1">
          Digital Agency Simulator
        </Typography>
        <Typography variant="h6" component="h2">
          Can you become an intergalactic tech provider?{" "}
        </Typography>
      </Stack>
    </Paper>
  );
};
