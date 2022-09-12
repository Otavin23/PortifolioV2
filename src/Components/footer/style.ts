import styled from "styled-components";

export const backgroundFooter = styled.footer`
  background: var(--backgroundTwo);
  height: 200px;
  display: flex;
  justify-content: center;
`;

export const containerFooter = styled.div`
  max-width: 1400px;
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  a {
    font-family: "Quicksand";
    font-weight: 400;
    opacity: 0.8;
    padding-top: 1rem;
    color: #ffffff;
    font-size: clamp(16px, 1.3vw, 25px);
    text-decoration: none;
  }
  del {
    text-decoration: none;
  }
`;

export const picture__iconFooter = styled.picture`
  img {
    max-width: 50px;
  }
`;
