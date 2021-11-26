import troll from "../lib/images/avatar-trollface.png";
import banker from "../lib/images/character-investment-banker.png";
import roary from "../lib/images/character-roary.png";
import { Avatar } from "@mui/material";

const randomAvatar = () => {
  const avatars = [troll, banker, roary];
  const random = Math.floor(Math.random() * avatars.length);

  return (
    <Avatar alt="avatar" src={avatars[random]} />
  )
}

export default randomAvatar;