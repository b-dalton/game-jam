import cheese from "../lib/images/logo-cheese.png";
import pizza from "../lib/images/logo-pizza.png";
import watermelon from "../lib/images/logo-watermelon.png";

const selectedLogo = (imageOption) => {
  switch (imageOption) {
    case "cheese":
      return <img style={{maxHeight: "100px"}} src={cheese} alt="cheese"/>;
    case "pizza":
      return <img style={{maxHeight: "100px"}} src={pizza} alt="pizza"/>;
    case "watermelon":
      return <img style={{maxHeight: "100px"}} src={watermelon} alt="watermelon"/>;
    default:
      return <img style={{maxHeight: "100px"}} src={cheese} alt="cheese"/>;
  }
}

export default selectedLogo