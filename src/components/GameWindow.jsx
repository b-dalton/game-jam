import { Container, Box, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import { GameStageEnum, useGameState } from "../contexts/GameState";
import { EventDialog } from "./EventDialog";
import { Marketplace } from "./Marketplace";
import { Shop } from "./Shop";
import StartScreen from "./StartScreen";
import { TitleBar } from "./TitleBar";
import { Toolbar } from "./Toolbar";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      sx={{
        overflow: "auto",
        maxHeight: "60vh",
      }}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  );
};

export const GameWindow = () => {
  const {
    state: { gameStage },
  } = useGameState();

  const [tabIndex, setTabIndex] = useState(0);

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
                minWidth: "35%",
                maxWidth: "35%",
              }}
            >
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <Tabs
                  value={tabIndex}
                  onChange={(_, newValue) => {
                    setTabIndex(newValue);
                  }}
                >
                  <Tab label="Shop" />
                  <Tab label="Contracts" />
                </Tabs>
              </Box>
              <TabPanel value={tabIndex} index={0}>
                <Shop />
              </TabPanel>
              <TabPanel value={tabIndex} index={1}>
                <Marketplace />
              </TabPanel>
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
