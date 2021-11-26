import React from "react";
import "./EventClacker.css";
import selectedStoryImage from "../../contexts/selectedStoryImage";
import selectedAvatar from "../../contexts/selectedAvatar";

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
          {selectedAvatar(event.characterName)}
          <p className="comment-user">{event.characterName}</p>
        </div>
        <p className="comment-body">{event.joke}</p>
      </div>
    </div>
  );
};

export default EventClacker;
