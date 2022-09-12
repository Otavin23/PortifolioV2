import styled from "styled-components";

export const imageProjects = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 350px;
  margin-bottom: 4rem;
  img {
    cursor: pointer;
    max-width: 50%;
    height: 100%;
  }
`;

export const informationProjects = styled.div`
  width: 45%;
  height: 100%;

  span {
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-size: clamp(15px, 3vw, 30px);
    font-weight: 500;
    text-transform: capitalize;
    #indicator {
      font-size: 20px;
      color: #0b8aff;
    }
  }

  p {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 400;
    padding-top: 2rem;
    color: #f9f9f9;
  }
  button {
    margin-top: 2rem;
    width: 241px;
    height: 56px;
    border: none;
    font-family: "Asap", sans-serif;
    font-weight: 500;
    background: #034a73;
    border-radius: 0.5rem;
    transition: all 0.05s ease;
    cursor: pointer;

    a {
      text-transform: capitalize;
      font-size: clamp(15px, 1.5vw, 30px);
      text-decoration: none;
      color: #ffffff;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;
