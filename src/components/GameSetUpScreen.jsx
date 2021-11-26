import {
  Button,
  TextField,
  MenuItem,
  Select,
  Stack,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

import React from "react";
import { useState } from "react/cjs/react.development";
import { useGameState } from "../contexts/GameState";

export const GameSetupScreen = (props) => {
  const { dispatch } = useGameState();
  const [companyName, setCompanyName] = useState();
  const [techStack, setTechStack] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: "startGame", payload: { companyName, techStack } });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "70%",
        margin: "3rem auto 0",
      }}
    >
      <Stack direction="column" spacing={2}>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Choose your company name"
            variant="outlined"
            value={companyName}
            required={true}
            onChange={(event) => {
              event.preventDefault();

              setCompanyName(event.target.value);
            }}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="techStack">Choose your tech stack</InputLabel>
          <Select
            labelId="techStack"
            name="stack"
            value={techStack}
            required={true}
            label="Choose your tech stack"
            onChange={(event) => {
              setTechStack(event.target.value);
            }}
          >
            <MenuItem value="PHP">PHP</MenuItem>
            <MenuItem value="Ruby">Ruby</MenuItem>
            <MenuItem value="JavaScript">JavaScript</MenuItem>
            <MenuItem value="Haskell">Haskell</MenuItem>
            <MenuItem value="C#">C#</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" type="submit">
          Start your own Tech Empire!
        </Button>
      </Stack>
    </Box>
  );
};

export default GameSetupScreen;
