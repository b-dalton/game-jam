import React from "react";

const EventEmail = ({ event }) => {
  const emailAddress = `${event.characterName.replace(" ", ".").toLowerCase()}@notspam.net`
  return (
    <div>
      <h3>Subject: {event.name}</h3>
      <h4>From: {emailAddress}</h4>
      <p>{event.description}</p>
      <p>Best Wishes,</p>
      <p>{event.characterName}</p>
    </div>
  );
};

export default EventEmail;
