import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetworks.sass";
const socialNetowrks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/luis-fernando-lima-826189268/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/LuisFernandoL",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/luis_fmiguel/",
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetowrks.map((network) => (
        <a
          href={network.link}
          target="blank"
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
