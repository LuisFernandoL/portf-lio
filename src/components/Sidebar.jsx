import Avatar from "../img/Foto de perfil Linkedin-2.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Luis Fernando" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/11YPynrFE9wwQLn9nieNa5U9pt6aCTPi-/view?usp=sharing"
        target="blank"
        className="btn"
      >
        Dowload currículo
      </a>
    </aside>
  );
};

export default Sidebar;
