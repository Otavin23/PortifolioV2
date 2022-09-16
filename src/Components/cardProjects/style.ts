import styled from "styled-components";

export const imageProjects = styled.div`
  display: flex;
  align-items: center;
  width: 890px;
  height: 290px;
  margin-bottom: 4rem;
  background: var(--backgrounProject);
  img {
    cursor: pointer;
    max-width: 50%;
    height: 100%;
    @media (max-width: 1115px) {
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
  width: 20%;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 30px;
    max-height: 30px;
  }
`;

export const informationProjects = styled.div`
  width: 350px;
  margin: 0 0 0 2rem;
  @media (max-width: 1115px) {
    width: 100%;
    text-align: center;
    padding-top: 2rem;
  }
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
`;

export const alignButton = styled.div`
  margin: 1rem 0 0 0;
  text-align: center;
`;
