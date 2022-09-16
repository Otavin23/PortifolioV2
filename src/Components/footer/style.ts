import styled from "styled-components";

export const backgroundFooter = styled.footer`
  background: var(--backgroundTwo);
  display: flex;
  justify-content: center;
  height: 3rem;
  padding: 5rem 0 3rem 0;
`;

export const containerFooter = styled.div`
  max-width: 1400px;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    text-align: center;
    font-family: "Fira Code";
    font-weight: 500;
    font-size: clamp(14px, 1vw, 15px);

    color: #b1b1b1;
  }
`;
