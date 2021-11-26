import React from "react";
import "./EventClacker.css";
import coffee from "../../lib/images/coffee-beans.jpeg";
import troll from "../../lib/images/trollface.jpeg"
import { Avatar } from "@mui/material";

const EventClacker = ({ event }) => {
  return (
    <div>
      <div className="header">CLACKER NEWS</div>
      <h2>{event.name}</h2>
      <div className="content">
        {/* <img src={event.image} alt={event.name} /> */}
        <img src={coffee} alt={event.name} className="clacker-image" />
        <p>{event.description}</p>
      </div>
      <hr />
      <div>
        <div className="comment">
          <Avatar alt={event.characterName} src={troll} />
          <p className="comment-user">{event.characterName}</p>
        </div>
        <p className="comment-body">{event.joke}</p>
      </div>
    </div>
  );
};

export default EventClacker;
