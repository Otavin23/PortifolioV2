import React from "react";
import * as S from "./style";

import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <S.backgroundFooter>
      <S.containerFooter>
        <S.picture__iconFooter>
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
        </S.picture__iconFooter>
        <h3>contato.alvesotavio132@gmail.com</h3>
      </S.containerFooter>
    </S.backgroundFooter>
  );
};

export default Footer;
