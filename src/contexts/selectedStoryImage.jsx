import coffee from "../lib/images/coffee-beans.jpeg";
import breaking from "../lib/images/story-breaking-news.png";

const selectedStoryImage = (story) => {
  switch (story) {
    case "coffee":
      return <img style={{maxHeight: "200px"}} src={coffee} alt="coffee" />;
    default:
      return <img style={{maxHeight: "200px"}} src={breaking} alt="coffee"/>;
  }
}

export default selectedStoryImage;