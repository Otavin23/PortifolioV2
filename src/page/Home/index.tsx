import React, { useEffect } from "react";
import Header from "../../Components/Header";

import * as S from "./styles";
import "aos/dist/aos.css";
import Aos from "aos";

import imageHero from "../../assets/hero.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import html from "../../assets/html 1.png";
import css__icon from "../../assets/css 1.png";
import js__icon from "../../assets/js 1.png";
import react__icon from "../../assets/react 1.png";
import typescript__icon from "../../assets/ts 1.png";
import scss__icon from "../../assets/sas 1.png";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Header />
      <S.backgroundHero>
        <S.containerHero>
          <S.hero__information data-aos="fade-right">
            <h1>
              <span id="text__one">Hi,</span>
              <br></br>
              i'm
              <span data-aos="fade-up-left">Otávio</span>,<br></br>
              <span id="text__end">web developer</span>
            </h1>
            <span id="text__developer">Desenvolvedor front-end</span>
            <button>learn more</button>
            <S.icon__hero>
              <img src={githubIcon} alt="" />
              <img src={linkedinIcon} alt="" />
            </S.icon__hero>
          </S.hero__information>
          <S.hero__image data-aos="fade-left">
            <img
              src={imageHero}
              alt="Image of a guy reading an English book and fiddling with the computer"
            />
          </S.hero__image>
        </S.containerHero>
      </S.backgroundHero>
      <S.backgroundSkiils>
        <S.containerSkills>
          <S.skiilName>
            <S.blockOne>01</S.blockOne>
            <h2>skiils</h2>
          </S.skiilName>
          <S.cardsSkiils>
            <div className="block block--orange">
              <S.cardContainer>
                <img src={html} alt="" />
                <h3>&lt;html&gt;</h3>
                <p>
                  HTMl é uma linguagem de marcação utilizada na construção de
                  páginas na Web. Documentos HTML podem ser interpretados por
                  navegadores.
                </p>
              </S.cardContainer>
            </div>
            <div className="block block--blue">
              <S.cardContainer>
                <img src={css__icon} alt="" />
                <h3>&lt;css&gt;</h3>
                <p>
                  O CSS é uma linguagem de folhas de estilos que é utilizada
                  para definir como os documentos escritos na linguagem de
                  marcação HTML.
                </p>
              </S.cardContainer>
            </div>
            <div className="block block--yellow">
              <S.cardContainer>
                <img src={js__icon} alt="" />
                <h3>&lt;javascript&gt;</h3>
                <p>
                  JavaScript é uma linguagem de programação interpretada
                  estruturada, de script em alto nível com tipagem.
                </p>
              </S.cardContainer>
            </div>
            <div className="block block--blueLight">
              <S.cardContainer>
                <img src={react__icon} alt="" />
                <h3>&lt;react.js&gt;</h3>
                <p>
                  O React é uma biblioteca JavaScript de código aberto com foco
                  em criar interfaces de usuário em páginas web. É mantido pelo
                  Facebook.
                </p>
              </S.cardContainer>
            </div>
            <div className="block block--blueLight">
              <S.cardContainer>
                <img src={typescript__icon} alt="" />
                <h3>&lt;typescript&gt;</h3>
                <p>
                  TypeScript é uma linguagem de programação de código aberto
                  desenvolvida pela Microsoft.
                </p>
              </S.cardContainer>
            </div>
            <div className="block block--red">
              <S.cardContainer>
                <img src={scss__icon} alt="" />
                <h3>&lt;scss&gt;</h3>
                <p>
                  Sass é uma linguagem de folhas de estilo concebida
                  inicialmente por Hampton Catlin e desenvolvida por Natalie
                  Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chr
                </p>
              </S.cardContainer>
            </div>
          </S.cardsSkiils>
        </S.containerSkills>
      </S.backgroundSkiils>
    </>
  );
};

export default Home;
