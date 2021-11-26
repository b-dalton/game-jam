import React from "react";
import EventEmail from "./EventEmail";
import EventClacker from "./EventClacker";

const EventUI = ({activeEvent}) => {
  if (activeEvent.type === "email") {
    return <EventEmail event={activeEvent} />;
  }
  if (activeEvent.type === "clackerNews") {
    return <EventClacker event={activeEvent} />;
  }
  return (
    <div>
      <h2>{activeEvent.name}</h2>
      <p>{activeEvent.description}</p>
      <p>Un-typed Event</p>
    </div>
  );
}

export default EventUI;