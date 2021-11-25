import { useGameState } from "../game-state";

export const EventDialog = () => {
  const { activeEvent, completeEvent } = useGameState();

  if (!activeEvent) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "10%",
        width: "80%",
        height: "80%",
        backgroundColor: "white",
        boxShadow: "0 0 10px #888",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <p>EVENT: {activeEvent.name}</p>
      <button onClick={completeEvent}>Continue</button>
    </div>
  );
};
