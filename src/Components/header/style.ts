import styled from "styled-components";

export const backgroundHeader = styled.header`
  background: var(--background);
  width: 100%;
  height: 3.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
`;

export const containerHeader = styled.div`
  max-width: 1400px;
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Logo = styled.span`
  color: #969696;
  font-weight: 600;
  font-size: 22px;
`;

export const nav__block = styled.nav`
  height: 100%;
  width: 30%;

  display: flex;
  align-items: flex-end;
`;

export const ul__links = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  li {
    margin: 0 1rem 0 0;
    a {
      font-size: 18px;
      text-transform: capitalize;
      color: #ffffff;
      text-decoration: none;
    }
    span {
      font-size: 12px;
      color: #0b8aff;
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
