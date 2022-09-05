import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import * as S from "./styles";
import "aos/dist/aos.css";
import Aos from "aos";

import imageHero from "../../assets/icons/hero.webp";
import githubIcon from "../../assets/icons/github.webp";
import linkedinIcon from "../../assets/icons/linkedin.webp";

/// SKIILS

import html from "../../assets/icons/html 1.webp";
import css__icon from "../../assets/icons/css 1.webp";
import js__icon from "../../assets/icons/js 1.webp";
import react__icon from "../../assets/icons/react 1.webp";
import typescript__icon from "../../assets/icons/ts 1.webp";
import scss__icon from "../../assets/icons/sas 1.webp";

///Imagem projetos
import landinPage from "../../assets/image__projects/landing-page.webp";
import gerenciamento from "../../assets/image__projects/gerenciamento-financeiro.webp";
import ecommerce from "../../assets/image__projects/ecommerce.webp";
import calculadora from "../../assets/image__projects/calculadora.webp";
import githubSearch from "../../assets/image__projects/githubSearch.webp";
import restContries from "../../assets/image__projects/rest-contries.webp";
import todoList from "../../assets/image__projects/todo-list.webp";
import interativo from "../../assets/image__projects/interativo.webp";
import qrcode from "../../assets/image__projects/qr-code.webp";
import article from "../../assets/image__projects/article.webp";

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
              <img src={githubIcon} alt="github icon for" />
              <img
                src={linkedinIcon}
                alt="linkedin icon for
"
              />
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
            <S.blockOne>02</S.blockOne>
            <h2>skiils</h2>
          </S.skiilName>
          <S.cardsSkiils data-aos="fade-right">
            <div className="block block--orange">
              <S.cardContainer>
                <img src={html} alt="icon html markup language" />
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
                <img
                  src={css__icon}
                  alt="css styling language works together with html"
                />
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
                <img
                  src={js__icon}
                  alt="JavaScript is an interpreted programming language"
                />
                <h3>&lt;javascript&gt;</h3>
                <p>
                  JavaScript é uma linguagem de programação interpretada
                  estruturada, de script em alto nível com tipagem.
                </p>
              </S.cardContainer>
            </div>
            <div className="block block--blueLight">
              <S.cardContainer>
                <img
                  src={react__icon}
                  alt="icone react an open source JavaScript library focused on creating user interfaces on web pages. It is maintained by Facebook."
                />
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
                <img
                  src={typescript__icon}
                  alt="icon typescript TypeScript is an open source programming language developed by Microsoft."
                />
                <h3>&lt;typescript&gt;</h3>
                <p>
                  TypeScript é uma linguagem de programação de código aberto
                  desenvolvida pela Microsoft.
                </p>
              </S.cardContainer>
            </div>
            <div className="block block--red">
              <S.cardContainer>
                <img
                  src={scss__icon}
                  alt="Sass is a stylesheet language initially conceived by Hampton Catlin and developed by Natalie Weizenbaum. After their initial releases, Weizenbaum and Chr"
                />
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
            <S.blockOne>03</S.blockOne>
            <h2>Projects</h2>
          </S.skiilName>

          <S.cardImageProjects data-aos="fade-right">
            <S.imageProjects>
              <img src={landinPage} alt="delivery landing page" />
            </S.imageProjects>

            <S.imageProjects>
              <img
                src={gerenciamento}
                alt="financial management landing page
"
              />
            </S.imageProjects>

            <S.imageProjects>
              <img
                src={ecommerce}
                alt="ecommerce snakers
"
              />
            </S.imageProjects>

            <S.imageProjects>
              <img
                src={calculadora}
                alt="challenge calculator
"
              />
            </S.imageProjects>

            <S.imageProjects>
              <img
                src={restContries}
                alt="where is my country project
"
              />
            </S.imageProjects>

            <S.imageProjects>
              <img
                src={githubSearch}
                alt="github project user search
"
              />
            </S.imageProjects>

            <S.imageProjects>
              <img
                src={todoList}
                alt="project task management
"
              />
            </S.imageProjects>

            <S.imageProjects>
              <img src={interativo} alt="challenge" />
            </S.imageProjects>

            <S.imageProjects>
              <img
                src={qrcode}
                alt="qr code challenge
"
              />
            </S.imageProjects>

            <S.imageProjects>
              <img
                src={article}
                alt="text article
"
              />
            </S.imageProjects>
          </S.cardImageProjects>
        </S.containerSkills>
      </S.backgroundProjects>

      <Footer />
    </>
  );
};

export default Home;
