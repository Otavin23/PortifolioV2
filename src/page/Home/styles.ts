import styled from "styled-components";

export const backgroundHero = styled.section`
  background: var(--background);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const containerHero = styled.div`
  max-width: 1400px;
  width: 85%;
  height: 85%;
  display: flex;
  justify-content: space-between;
`;

export const hero__information = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-family: "Archivo Black";
    font-style: normal;
    font-weight: 400;
    font-size: clamp(35px, 5vw, 64px);
    color: #ffffff;
    #text__one {
      color: #ffffff;
    }
    #text__end {
      color: #ffffff;
    }
    span {
      font-family: "Archivo Black", sans-serif;
      color: #8bc7ff;
      font-size: clamp(35px, 5vw, 64px);
    }
  }
  #text__developer {
    font-family: "Redacted Script";
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 29px;
    color: #ffffff;
    opacity: 0.5;
  }
  button {
    margin-top: 2rem;
    width: 241px;
    height: 56px;
    border: none;
    font-family: "Asap", sans-serif;
    font-weight: 500;
    background: #034a73;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    color: #ffffff;
    font-size: 23px;
  }
`;

export const icon__hero = styled.picture`
  padding-top: 2rem;
  img {
    max-width: 40px;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

export const hero__image = styled.picture`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 50%;
  padding-top: 2rem;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: buttonShadow;

  @keyframes buttonShadow {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 901px) {
    display: none;
  }
`;

export const backgroundSkiils = styled.section`
  background: var(--backgroundTwo);
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
`;

export const containerSkills = styled.div`
  max-width: 1400px;
  width: 85%;
  height: 80%;
`;

export const skiilName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 140px;
  h2 {
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-size: 40px;
    font-weight: 500;
  }
`;

export const blockOne = styled.div`
  width: 169px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--backgroundMark);
  color: #ffffff;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 24px;
`;

export const cardsSkiils = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 5rem;
  .block {
    background: #121113;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1.5rem;
    width: 300px;
    height: 346px;
    margin-bottom: 2rem;
    box-shadow: 0 0 1em #0000;
  }

  .block--orange {
    border-bottom: 30px solid #d08513;
    h3 {
      color: #d08513;
    }
  }

  .block--blue {
    border-bottom: 30px solid #0b8aff;
    h3 {
      color: #0b8aff;
    }
  }

  .block--yellow {
    border-bottom: 30px solid #faff00;
    h3 {
      color: #faff00;
    }
  }

  .block--blueLight {
    border-bottom: 30px solid #6cb3f4;
    h3 {
      color: #6cb3f4;
    }
  }

  .block--red {
    border-bottom: 30px solid #b44848;
    h3 {
      color: #b44848;
    }
  }

  @media (max-width: 716px) {
    display: flex;
    justify-content: center;
  }
`;

export const cardSkiils = styled.div`
  background: #121113;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  width: 300px;
  height: 346px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 40px solid transparent;
  border-image-slice: 1;
`;

export const cardContainer = styled.div`
  height: 100%;
  width: 90%;
  height: 90%;
  h3 {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 700;

    font-size: 23px;
    color: #8f5804;
    text-transform: uppercase;
  }
  p {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    padding-top: 2rem;
    color: #f9f9f9;
  }
`;

export const backgroundProjects = styled.section`
  background: var(--background);
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
`;

export const containerProjects = styled.div``;

export const cardImageProjects = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 6rem;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const imageProjects = styled.picture`
  img {
    max-width: 350px;
    max-height: 350px;
    height: 230px;
    width: 350px;
    cursor: pointer;
    margin-bottom: 2rem;

    transition: all 0.05s ease;
    &:hover {
      transform: scale(1.1);
      opacity: 0.1;
    }
  }
`;
