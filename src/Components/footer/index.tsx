import React from "react";
import * as S from "./style";

import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <S.backgroundFooter>
      <S.containerFooter>
        <S.picture__iconFooter>
          <img src={github} alt="icon github" />
          <img src={linkedin} alt="icon linkedin" />
        </S.picture__iconFooter>
        <h3>contato.alvesotavio132@gmail.com</h3>
      </S.containerFooter>
    </S.backgroundFooter>
  );
};

export default Footer;
