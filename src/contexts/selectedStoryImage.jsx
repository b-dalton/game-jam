import coffee from "../lib/images/coffee-beans.jpeg";
import breaking from "../lib/images/story-breaking-news.png";

const selectedStoryImage = (story) => {
  switch (story) {
    case "coffee":
      return (
        <img
          style={{ maxHeight: "200px", marginRight: "1rem" }}
          src={coffee}
          alt="coffee"
        />
      );
    case "breakingNews":
      return (
        <img
          style={{ maxHeight: "200px", marginRight: "1rem" }}
          src={breaking}
          alt="breaking news"
        />
      );
    default:
      return (
        <img
          style={{ maxHeight: "200px", marginRight: "1rem" }}
          src={breaking}
          alt="breaking-news"
        />
      );
  }
};

export default selectedStoryImage;
