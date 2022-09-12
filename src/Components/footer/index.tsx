import React from "react";
import * as S from "./style";

import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <S.backgroundFooter>
      <S.containerFooter>
        <S.picture__iconFooter>
          <a href="https://github.com/Otavin23" rel="noopener" target="_blank">
            <img src={github} alt="icon github" />
          </a>

          <a
            href="https://www.linkedin.com/in/otavio-vieira-84524721a/"
            target="_blank"
            rel="noopener"
          >
            <img src={linkedin} alt="icon linkedin" />
          </a>
        </S.picture__iconFooter>

        <a
          href="mailto:contato.alvesotavio132@.gmail.com"
          rel="noopener"
          target="_blank"
        >
          <del>contato.alvesotavio132@gmail.com</del>
        </a>
      </S.containerFooter>
    </S.backgroundFooter>
  );
};

export default Footer;
