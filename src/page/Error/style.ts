import styled from "styled-components";

export const backgroundError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1c2833;
  height: 100vh;
`;

export const containerError = styled.div`
  max-width: 1400px;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const errorImage = styled.picture``;

export const textError = styled.div`
  h1,
  h2 {
    color: black;
    text-transform: uppercase;
    font-weight: 500;
  }
  span {
    font-size: 10rem;
    color: white;
  }
  button {
    margin-top: 2rem;
    border: none;
    background: #d4ac0d;
    width: 100%;
    height: 3.5rem;
    font-style: normal;
    font-weight: 700;
    color: #17202a;
    font-size: 1rem;
    border: 2px solid #b7950b;
    cursor: pointer;

    animation-name: returnhome;
    animation-duration: 3s;
    animation-iteration-count: infinite;

    @keyframes returnhome {
      0% {
        transform: scale(1.1);
      }
      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.1);
      }
    }
  }
`;
