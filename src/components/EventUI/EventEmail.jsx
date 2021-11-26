import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import { Badge } from "@mui/material";

const EventEmail = ({ event }) => {
  const emailAddress = `${event.characterName
    .replace(" ", ".")
    .toLowerCase()}@notspam.net`;
  return (
    <div>
      <Badge badgeContent={1} color="primary">
        <EmailIcon color="action" />
      </Badge>
      <h3>Subject: {event.name}</h3>
      <h4>From: {emailAddress}</h4>
      <p>{event.description}</p>
      <p>Best Wishes,</p>
      <p>{event.characterName}</p>
    </div>
  );
};

export default EventEmail;
