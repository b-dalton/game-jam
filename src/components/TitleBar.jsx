import { Paper, Typography } from "@mui/material";

export const TitleBar = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        marginBottom: "1rem",
        padding: "1rem",
      }}
    >
      <Typography variant="h4" component="h1">
        Made Tech Simulator
      </Typography>
      <Typography variant="h6" component="h2">
        Can you become an intergalactic tech provider?{" "}
      </Typography>
    </Paper>
  );
};
