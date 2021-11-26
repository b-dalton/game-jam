import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import YardIcon from "@mui/icons-material/Yard";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import React from "react";
import { GameStageEnum, useGameState } from "../contexts/GameState";
import { EventDialog } from "./EventDialog";

import StartScreen from "./StartScreen";
import { TitleBar } from "./TitleBar";
import { Toolbar } from "./Toolbar";

const shopItems = [
  {
    name: "Office plants",
    price: 100,
    description:
      "A bunch of office plants that'll make your human staff a little happier",
    icon: <YardIcon />,
    action: (state) => {
      return {
        ...state,
        employeeHappiness: state.employeeHappiness + 0.05,
        currency: state.currency - 100,
      };
    },
  },
  {
    name: "Fancy coffee machine",
    price: 500,
    description:
      "Look it's just a coffee machine but a little fancy, your employees seem to care deeply and it makes them happier",
    icon: <CoffeeMakerIcon />,
    action: (state) => {
      return {
        ...state,
        employeeHappiness: state.employeeHappiness + 0.1,
        currency: state.currency - 500,
      };
    },
  },
];

export const GameWindow = () => {
  const {
    state: { gameStage, currency },
    dispatch,
  } = useGameState();

  return (
    <Container
      sx={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TitleBar />

      {gameStage === GameStageEnum.LAUNCH && <StartScreen />}

      {gameStage === GameStageEnum.RUNNING && (
        <>
          <Toolbar />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <EventDialog />
            </Box>

            <Box
              sx={{
                width: "35%",
              }}
            >
              <Typography variant="h6" component="h2">
                Shop
              </Typography>

              <List>
                {shopItems.map((item, index) => (
                  <ListItem disablePadding key={index}>
                    <Tooltip title={item.description}>
                      <ListItemButton
                        disabled={item.price > currency}
                        onClick={() =>
                          dispatch({ type: "purchaseItem", payload: item })
                        }
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                          primary={`${item.name} – $${item.price}`}
                        />
                      </ListItemButton>
                    </Tooltip>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </>
      )}

      {gameStage === GameStageEnum.PAUSED && (
        <>
          <Toolbar />
          <div>Paused...</div>
        </>
      )}

      {gameStage === GameStageEnum.FINISHED && <div>End of game!</div>}
    </Container>
  );
};
