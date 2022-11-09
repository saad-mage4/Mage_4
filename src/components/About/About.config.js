import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import officeImage from "./img/office_.jpg";

const About_info = [
  {
    icon: <img src={officeImage} alt="office-img" />,
    customClass: "bounce-in-left delay-2ms company_img",
  },
  {
    icon: <FontAwesomeIcon icon={faBuilding} />,
    title: "About Mage4",
    customClass: "bounce-in-top delay-3ms",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius eum a in eaque commodi labore excepturi dignissimos sed, cumque, doloribus natus quod? Inventore quis cum eveniet excepturi architecto atque qui eaque voluptates quod repellendus nulla consectetur repudiandae aliquam magnam, dignissimos placeat dolore blanditiis doloribus. Sit distinctio ut optio temporibus dolorum.",
  },
];
export default About_info;
