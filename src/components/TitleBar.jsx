import { Paper, Stack, Typography } from "@mui/material";

export const TitleBar = () => {
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
