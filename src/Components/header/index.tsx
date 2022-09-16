import React from "react";
import * as S from "./style";
import menuH from "../../assets/menu.webp";

const Header = () => {
  return (
    <S.backgroundHeader>
      <S.containerHeader>
        <S.Logo>otavio</S.Logo>

        <S.nav__block>
          <S.ul__links>
            <li>
              <a href="#">
                <span>00. </span>
                home
              </a>
            </li>
            <li>
              <a href="#">
                <span>02. </span>
                projetos
              </a>
            </li>
            <li>
              <a href="#">
                <span>03. </span>
                experiencias
              </a>
            </li>
          </S.ul__links>

          <button>check github</button>
        </S.nav__block>

        <S.menu>
          <img src={menuH} alt="menu 3 toothpick" />
        </S.menu>
      </S.containerHeader>
    </S.backgroundHeader>
  );
};

export default Header;
