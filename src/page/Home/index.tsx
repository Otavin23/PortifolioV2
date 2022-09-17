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
      duration: 1000,
    });
  }, []);

  console.log(challenge);

  return (
    <>
      <Header />

      <S.backgroundHero data-aos="fade-right">
        <S.containerHero>
          <S.hero__information>
            <h1>
              Oi, eu sou
              <span>Otavio Vieira, Web Developer</span>
            </h1>

            <p>
              freelancer em busca de uma oportunidade focado nas melhores
              tecnologias desenvolvo
              <span className="green-text"> landing-pages</span> e aplicação web
              ultilizando <span className="green-text">react.</span>
            </p>
            <S.button__nav>
              <button className="button-green">Learn more</button>
              <a
                href="https://github.com/Otavin23"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button-gray">View github</button>
              </a>
              <a
                href="https://www.linkedin.com/in/otavio-vieira-84524721a/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button-gray">View Linkedin</button>
              </a>
            </S.button__nav>
          </S.hero__information>
        </S.containerHero>
      </S.backgroundHero>

      <S.backgroundSkiils>
        <S.containerSkills>
          <S.skiilName>
            <h2>
              <span>02. &nbsp;</span>
              projetos
            </h2>
            <span className="hr-line"></span>
          </S.skiilName>

          <S.cardImageProjects>
            <Cardp
              srcc={`${challenge}`}
              alt={"imagem de um projeto de um site de hamburguer"}
              titulo={"Landing page empire burguer"}
              tituloSecond={
                "burguer empire, desafio feito para colocar em provas as tech aprendida ao longo do tempo."
              }
              href={"https://br-challenges-empire-burger.vercel.app/"}
            />

            <Cardp
              srcc={`${landinPage}`}
              alt={"image of a fast delivery landing page"}
              titulo={"Landing page logis"}
              tituloSecond={
                "landing-page bem completa, seu parceiro de entrega rapida e relampago desafio."
              }
              href={"https://logist-fast-delivery-landing-page.vercel.app/"}
            />

            <Cardp
              srcc={`${gerenciamento}`}
              alt={
                "financial management landing page based on a designer provided by figma"
              }
              titulo={"Landing page shark finances"}
              tituloSecond={
                "landing-page de gerenciamento financeiro, designer fornecido pelo figma usei como base."
              }
              href={"https://gerenciamento-financeiro-landing-page.vercel.app/"}
            />

            <Cardp
              srcc={`${calculadora}`}
              alt={"image of a calculator"}
              titulo={"Calculadora"}
              tituloSecond={
                "calculadora bem pratica, desafio do front-end mentor"
              }
              href={"https://tiny-sopapillas-c14523.netlify.app/"}
            />

            <Cardp
              srcc={`${githubSearch}`}
              alt={"desafio feito para achar pessoas do github pelo nome"}
              titulo={"Encontre usuarios"}
              tituloSecond={
                "desafio feito para achar pessoas do github pelo nome, usando api fornecida pelo github"
              }
              href={"https://eloquent-johnson-973322.netlify.app/"}
            />

            <Cardp
              srcc={`${todoList}`}
              alt={"image task management"}
              titulo={"Gerenciador de tarefas"}
              tituloSecond={"gerenciador de tarefa, diaria todo-list"}
              href={"https://fervent-yalow-13b8a0.netlify.app/"}
            />

            <Cardp
              srcc={`${interativo}`}
              alt={"image of text with several buttons"}
              titulo={"Interativo"}
              tituloSecond={
                "a cada clique no numero ele vai interagir com o botão e levar para um modal de baixo desse que esta oculto"
              }
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
            />
          </S.cardImageProjects>
        </S.containerSkills>
      </S.backgroundSkiils>

      <S.backgroundProjects data-aos="fade-right">
        <S.containerSkills>
          <S.skiilName>
            <h2>
              <span>03. &nbsp;</span>
              habilidades
            </h2>
            <span className="hr-line"></span>
          </S.skiilName>
          <S.skillNames>
            <button>front-end</button>
            <S.skillsNav>
              <span>habilidades</span>
              <ul>
                <li>html</li>

                <li>css</li>

                <li>scss</li>

                <li>javascript</li>
                <li>react.js</li>
                <li>styled-components</li>
                <li>typescript</li>
                <li>next.js</li>
                <li>figma</li>
              </ul>
            </S.skillsNav>
          </S.skillNames>
        </S.containerSkills>
      </S.backgroundProjects>

      <Footer />
    </>
  );
};

export default Home;
