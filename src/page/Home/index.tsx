import React, { useEffect } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";

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
import challenge from "../../assets/image__projects/chall.webp";
import Cardp from "../../Components/cardProjects";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  console.log(challenge);

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
              <a
                href="https://github.com/Otavin23"
                target="_blank"
                rel="noopener"
              >
                <img src={githubIcon} alt="github icon for" />
              </a>
              <a
                href="https://www.linkedin.com/in/otavio-vieira-84524721a/"
                target="_blank"
                rel="noopener"
              >
                <img src={linkedinIcon} alt="linkedin icon for" />
              </a>
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
            <Cardp
              srcc={`${challenge}`}
              alt={"imagem de um projeto de um site de hamburguer"}
              titulo={"empire burguer"}
              tituloSecond={
                "landing-page king burguer um site de hamburguer focado em deixar uma estrutura agradavel, esse desafio esta disponivel no site br-challenge"
              }
              number={"01"}
              href={"https://br-challenges-empire-burger.vercel.app/"}
            />

            <Cardp
              srcc={`${landinPage}`}
              alt={"image of a fast delivery landing page"}
              titulo={"landing-page logis"}
              tituloSecond={
                "landing-page bem completa, seu parceiro de entrega rapida e relampago desafio."
              }
              number={"02"}
              href={"https://logist-fast-delivery-landing-page.vercel.app/"}
            />

            <Cardp
              srcc={`${gerenciamento}`}
              alt={
                "financial management landing page based on a designer provided by figma"
              }
              titulo={"landing-page logis"}
              tituloSecond={
                "landing-page de gerenciamento financeiro, designer fornecido pelo figma usei como base."
              }
              number={"03"}
              href={"https://gerenciamento-financeiro-landing-page.vercel.app/"}
            />

            <Cardp
              srcc={`${calculadora}`}
              alt={"image of a calculator"}
              titulo={"calculadora"}
              tituloSecond={
                "calculadora bem pratica, desafio do front-end mentor"
              }
              number={"04"}
              href={"https://tiny-sopapillas-c14523.netlify.app/"}
            />

            <Cardp
              srcc={`${githubSearch}`}
              alt={"desafio feito para achar pessoas do github pelo nome"}
              titulo={"pesquisa github"}
              tituloSecond={
                "desafio feito para achar pessoas do github pelo nome, usando api fornecida pelo github"
              }
              number={"05"}
              href={"https://eloquent-johnson-973322.netlify.app/"}
            />

            <Cardp
              srcc={`${todoList}`}
              alt={"image task management"}
              titulo={"Tarefa todo list"}
              tituloSecond={"gerenciador de tarefa, diaria todo-list"}
              href={"https://fervent-yalow-13b8a0.netlify.app/"}
              number={"06"}
            />

            <Cardp
              srcc={`${interativo}`}
              alt={"image of text with several buttons"}
              titulo={"Interativo"}
              tituloSecond={
                "a cada clique no numero ele vai interagir com o botão e levar para um modal de baixo desse que esta oculto"
              }
              number={"07"}
              href={"https://interactive-rating-component-tan-six.vercel.app/"}
            />

            <Cardp
              srcc={`${restContries}`}
              alt={"image of a website to locate the country and learn more"}
              titulo={"procura pais"}
              tituloSecond={
                "procura pais e fornece infomações do pais desejado, precisa de ajustes"
              }
              href={"https://eager-poincare-e5ad84.netlify.app/"}
              number={"08"}
            />
          </S.cardImageProjects>
        </S.containerSkills>
      </S.backgroundProjects>

      <Footer />
    </>
  );
};

export default Home;
