import React, { useEffect } from "react";
import Header from "../../Components/Header";

import * as S from "./styles";
import "aos/dist/aos.css";
import Aos from "aos";

import imageHero from "../../assets/icons/hero.png";
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import html from "../../assets/icons/html 1.png";
import css__icon from "../../assets/icons/css 1.png";
import js__icon from "../../assets/icons/js 1.png";
import react__icon from "../../assets/icons/react 1.png";
import typescript__icon from "../../assets/icons/ts 1.png";
import scss__icon from "../../assets/icons/sas 1.png";

///Imagem projetos

import landinPage from "../../assets/image__projects/landing-page.png";
import gerenciamento from "../../assets/image__projects/gerenciamento-financeiro.png";
import ecommerce from "../../assets/image__projects/ecommerce.jpeg";
import calculadora from "../../assets/image__projects/calculadora.jpeg";
import githubSearch from "../../assets/image__projects/githubSearch.jpeg";
import restContries from "../../assets/image__projects/rest-contries.jpeg";
import todoList from "../../assets/image__projects/todo-list.jpeg";
import interativo from "../../assets/image__projects/interativo.png";
import qrcode from "../../assets/image__projects/qr-code.png";
import article from "../../assets/image__projects/article.jpeg";

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

      <S.backgroundProjects>
        <S.containerSkills>
          <S.skiilName>
            <S.blockOne>02</S.blockOne>
            <h2>Projects</h2>
          </S.skiilName>

          <S.cardImageProjects>
            <S.imageProjects>
              <img src={landinPage} alt="" />
            </S.imageProjects>

            <S.imageProjects>
              <img src={gerenciamento} alt="" />
            </S.imageProjects>

            <S.imageProjects>
              <img src={ecommerce} alt="" />
            </S.imageProjects>

            <S.imageProjects>
              <img src={calculadora} alt="" />
            </S.imageProjects>

            <S.imageProjects>
              <img src={restContries} alt="" />
            </S.imageProjects>

            <S.imageProjects>
              <img src={githubSearch} alt="" />
            </S.imageProjects>

            <S.imageProjects>
              <img src={todoList} alt="" />
            </S.imageProjects>

            <S.imageProjects>
              <img src={interativo} alt="" />
            </S.imageProjects>

            <S.imageProjects>
              <img src={qrcode} alt="" />
            </S.imageProjects>

            <S.imageProjects>
              <img src={article} alt="" />
            </S.imageProjects>
          </S.cardImageProjects>
        </S.containerSkills>
      </S.backgroundProjects>
    </>
  );
};

export default Home;
