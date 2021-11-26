import troll from "../lib/images/avatar-trollface.png";
import roary from "../lib/images/character-roary.png";
import banker from "../lib/images/character-investment-banker.png";
import { Avatar } from "@mui/material";


const selectedAvatar = (user) => {
  switch (user) {
    case "@i-am-not-a-lion":
      return <Avatar src={roary} />;
    case "@financial-grimes":
      return <Avatar src={banker} />;
    default:
      return <Avatar src={troll} alt="troll"/>;
  }
}

export default selectedAvatar;