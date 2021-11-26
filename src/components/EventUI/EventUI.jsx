import React from "react";
import EventEmail from "./EventEmail";

const EventUI = ({activeEvent}) => {
  if (activeEvent.type === "email") {
    return <EventEmail event={activeEvent} />;
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