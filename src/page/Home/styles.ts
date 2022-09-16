import styled from "styled-components";

export const backgroundHero = styled.section`
  background: var(--background-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const containerHero = styled.div`
  max-width: 1400px;
  width: 75%;
  height: 85%;
  display: flex;
  justify-content: space-between;
`;

export const hero__information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 800;
    font-size: 41px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
  }

  p {
    padding-top: 1.5rem;
    font-family: "Fira Code", monospace;
    color: var(--grayColor);
    font-weight: 600;
    max-width: 490px;
    font-size: 14px;
    .green-text {
      color: var(--greenColor);
    }
  }
`;

export const button__nav = styled.nav`
  width: 85%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 1.5rem 0 0 0;
  button {
    width: 152px;
    height: 53px;
    font-family: "Inter", sans-serif;
    border-radius: 11px;
    font-size: 15px;
    color: #ffff;
    cursor: pointer;
  }
  .button-green {
    background: var(--greenColor);
    border: 1px solid var(--greenColor);
    box-shadow: 0px 4px 56px var(--greenColor);
    font-weight: 600;
    // margin: 0 1rem 0 0rem;
  }
  .button-gray {
    background: var(--button-gray);
    border: none;
    font-weight: 500;
    // margin: 0 1rem 0 0rem;
  }
`;

export const backgroundSkiils = styled.section`
  background: var(--backgroundTwo);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 0 10rem 0;
`;

export const containerSkills = styled.div`
  max-width: 1400px;
  width: 75%;
  height: 80%;
`;

export const skiilName = styled.div`
  width: 100%;
  display: flex;
  height: 4.5rem;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;

  h2 {
    font-weight: 500;
    font-size: 40px;
    color: #ffffff;
    text-transform: capitalize;
    span {
      align-items: end;
      color: var(--greenColor);
      font-size: 23px;
    }
  }

  .hr-line {
    margin: 0 0rem 0 1rem;
    width: 50%;
    height: 0.2rem;
    background: #717171;
  }
`;

export const cardsSkiils = styled.div`
  width: 100%;
  padding-top: 5rem;
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 716px) {
    display: flex;
    justify-content: center;
  }
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

export const skillNames = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 3rem 0 0 0;
  button {
    width: 162px;
    height: 56px;
    background: rgba(183, 254, 120, 0.22);
    border: none;
    border-left: 4px solid #78ff00;
  }
`;

export const skillsNav = styled.nav`
  background: yellow;
`;
