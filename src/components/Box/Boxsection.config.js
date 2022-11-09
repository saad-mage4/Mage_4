import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faUserAlt,
  faCode,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const section_1 = [
  {
    icon: <FontAwesomeIcon icon={faDesktop} />,
    title: "Backend Development",
    customClass: "bounce-in-left delay-2ms",
    text: "",
    details: [
      {
        name: "PHP",
        info: "We Work on Magento-2 which is build on PHP Framework.",
      },
      { name: "Laravel", info: "We are now getting our hands on Laravel." },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faUserAlt} />,
    title: "Frontend & PWA",
    customClass: "bounce-in-top delay-3ms",
    text: "",
    details: [
      {
        name: "React Js",
        info: "Build a site on React will give you great user experience.",
      },
      {
        name: "Progressive Web App",
        info: "Magento PWA comes with great optimization tools.",
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: "3rd Party Integrations",
    customClass: "bounce-in-top delay-4ms",
    text: "",
    details: [
      {
        name: "Paypal",
        info: "Integration of Paypal can be done by us on your E-Com project.",
      },
      { name: "Stripe", info: "Integration of Stripe payment." },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faSearch} />,
    title: "Maninfod Support",
    customClass: "bounce-in-right delay-5ms",
    text: "",
    details: [{ name: "Saad", info: "" }],
  },
  {
    icon: <FontAwesomeIcon icon={faDesktop} />,
    title: "M2 Migrations",
    customClass: "bounce-in-left delay-5ms",
    text: "",
    details: [{ name: "Saad", info: "" }],
  },
  {
    icon: <FontAwesomeIcon icon={faUserAlt} />,
    title: "Audits & Optimizations",
    customClass: "bounce-in-bottom delay-4ms",
    text: "",
    details: [{ name: "Saad", info: "" }],
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: "Dedicated Resources",
    customClass: "bounce-in-bottom delay-3ms",
    text: "",
    details: [{ name: "Saad", info: "" }],
  },
  {
    icon: <FontAwesomeIcon icon={faSearch} />,
    title: "Extensions",
    customClass: "bounce-in-right delay-2ms",
    text: "",
    details: [{ name: "Saad", info: "" }],
  },
];
export default section_1;
