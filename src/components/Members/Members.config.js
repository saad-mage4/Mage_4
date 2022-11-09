import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode } from "@fortawesome/free-solid-svg-icons";

const Members_info = [
  {
    icon: <FontAwesomeIcon icon={faDesktop} />,
    title: "Frontend Team Members",
    customClass: "bounce-in-top delay-2ms",
    url:'/mage_4/frontend',
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: "Backend Team Members",
    customClass: "bounce-in-bottom delay-2ms",
    url:'/mage_4/backend',
  },
];
export default Members_info;
