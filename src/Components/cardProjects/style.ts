import styled from "styled-components";

export const imageProjects = styled.div`
  display: flex;
  align-items: center;
  width: 890px;
  height: 290px;
  margin-bottom: 4rem;
  background: var(--backgrounProject);

  img {
    object-fit: cover;
  }
  @media (max-width: 1115px) {
    flex-wrap: wrap;
    height: 0%;
    width: 100%;
  }
  @media (max-width: 1115px) {
    img {
      max-width: 100%;
    }
  }
`;

export const images__links = styled.picture`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 30px;
    max-height: 30px;
  }
  margin: 0 0 1rem 0;
`;

export const images__nav = styled.picture`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem 0 0;

  img {
    max-width: 30px;
    max-height: 30px;
    margin: 0 1rem 0 0;
  }
  @media (max-width: 1115px) {
  }
`;

export const informationProjects = styled.div`
  width: 350px;
  margin: 0 1rem 0 1rem;

  span {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;
  }

  p {
    margin-top: 1rem;
    color: #969696;
    font-family: "Fira Code";
    font-weight: 400;
    font-size: 15px;
  }

  button {
    font-family: "Fira Code";
    font-size: 16px;
    border: none;
    font-weight: 700;
    width: 130px;
    height: 32px;
    background: #6da13f;
    border-radius: 8px;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
  }

  @media (max-width: 1115px) {
    padding-top: 2rem;
    width: 90%;
  }

  @media (max-width: 1115px) {
    button {
      margin: 0 0 1rem 0;
    }
  }
`;

export const alignButton = styled.div`
  margin: 1rem 0 0 0;
  text-align: center;
`;
