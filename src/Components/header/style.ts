import styled from "styled-components";

export const backgroundHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Fira Code", monospace;
  position: fixed;
  backdrop-filter: blur(12px);
`;

export const containerHeader = styled.div`
  max-width: 1400px;
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  color: #ffffff;
  font-size: 14px;
`;

export const nav__block = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Fira Code", monospace;

  width: 55%;
  button {
    border: none;
    width: 152px;
    height: 47px;
    background: transparent;
    border: 1px solid var(--greenColor);
    color: var(--greenColor);
    font-size: 13px;
    text-transform: capitalize;
    //filter: drop-shadow(10px 10px 65px #6da13f);
    box-shadow: 0px 0px 49px 0px #6da13f;
    border-radius: 2px;
    cursor: pointer;
  }
`;

export const ul__links = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 70%;
  li {
    margin: 0 1rem 0 0;
    a {
      font-size: 14px;
      text-transform: capitalize;
      color: #ffffff;
      text-decoration: none;
    }
    span {
      color: var(--greenColor);
    }
  }
  @media (max-width: 764px) {
    display: none;
  }
`;

export const menu = styled.picture`
  display: flex;
  align-items: flex-end;
  display: none;
  img {
    max-width: 30px;
  }
  cursor: pointer;
  @media (max-width: 764px) {
    display: flex;
  }
`;
