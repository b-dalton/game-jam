import { Container, Paper } from "@mui/material";
import EventUI from "./EventUI/EventUI";
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
				{/* <p>EVENT: {activeEvent.name}</p> */}
				<EventUI activeEvent={activeEvent} />
				{activeEvent.type === "choice" ? (
					<>
						<button onClick={() => dispatch({ type: "makeChoice", payload: {event: activeEvent, choice: "Buy Out"} })}>
							Buy Out
						</button>
						<button onClick={() => dispatch({ type: "makeChoice", payload: {event: activeEvent, choice: "IPO"} })}>
							IPO
						</button>
					</>
				) :
				<button onClick={() => dispatch({ type: "completeEvent" })}>
					Continue
				</button>
        }
			</Paper>
		</Container>
	);
};
