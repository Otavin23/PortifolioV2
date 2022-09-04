import React, { useEffect } from "react";
import Header from "../../Components/Header";

import * as S from "./styles";

import imageHero from "../../assets/hero.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import "aos/dist/aos.css";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Header />
      <S.BackgroundHero>
        <S.ContainerHero>
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
        </S.ContainerHero>
      </S.BackgroundHero>
    </>
  );
};

export default Home;
