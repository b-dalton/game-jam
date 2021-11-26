import coffee from "../lib/images/coffee-beans.jpeg";

const selectedStoryImage = (story) => {
  switch (story) {
    case "coffee":
      return <img style={{maxHeight: "200px"}} src={coffee} alt="coffee" />;
    default:
      return <img style={{maxHeight: "200px"}} src={coffee} alt="coffee"/>;
  }
}

export default selectedStoryImage;