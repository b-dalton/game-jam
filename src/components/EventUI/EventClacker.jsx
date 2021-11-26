import React from "react";
import "./EventClacker.css";
import troll from "../../lib/images/avatar-trollface.png";
import { Avatar } from "@mui/material";
import selectedStoryImage from "../../contexts/selectedStoryImage";

const EventClacker = ({ event }) => {  
  return (
    <div>
      <div className="header">CLACKER NEWS</div>
      <h2>{event.name}</h2>
      <div className="content">
        {selectedStoryImage(event.image)}
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
