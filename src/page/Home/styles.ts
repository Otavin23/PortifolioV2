import styled from "styled-components";

export const BackgroundHero = styled.section`
  background: var(--background);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerHero = styled.div`
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
    font-size: 65px;
    line-height: 71px;
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
      font-size: 65px;
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
`;
