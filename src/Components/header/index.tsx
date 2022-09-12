import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.backgroundHeader>
      <S.containerHeader>
        <S.Logo data-aos="fade-right">&lt; Portifolio &frasl;&gt;</S.Logo>
        <S.nav__block data-aos="fade-left">
          <S.ul__links>
            <li>
              <a href="#">
                <span>01.</span>
                home
              </a>
            </li>
            <li>
              <a href="#">
                <span>02.</span>
                Skiils
              </a>
            </li>
            <li>
              <a href="#">
                <span>03.</span>
                Projects
              </a>
            </li>
          </S.ul__links>
        </S.nav__block>
      </S.containerHeader>
    </S.backgroundHeader>
  );
};

export default Header;
