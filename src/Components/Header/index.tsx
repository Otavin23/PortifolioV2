import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.backgroundHeader>
      <S.ContainerHeader>
        <S.Logo data-aos="fade-right">&lt; Portifolio &frasl;&gt;</S.Logo>
        <S.nav__block data-aos="fade-left">
          <S.ul__links>
            <li>
              <span>01.</span>
              home
            </li>
            <li>
              <span>02.</span>
              Skiils
            </li>
            <li>
              <span>03.</span>
              Projects
            </li>
          </S.ul__links>
        </S.nav__block>
      </S.ContainerHeader>
    </S.backgroundHeader>
  );
};

export default Header;
