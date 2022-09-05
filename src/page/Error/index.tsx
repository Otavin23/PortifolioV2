import React from "react";
import * as S from "./style";
import image from "../../assets/error/astronauta.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <S.backgroundError>
      <S.containerError>
        <S.errorImage>
          <img src={image} alt="" />
        </S.errorImage>
        <S.textError>
          <h1>error!</h1>
          <span>404</span>
          <h2>page not found</h2>
          <Link to="/">
            <button>return to home</button>
          </Link>
        </S.textError>
      </S.containerError>
    </S.backgroundError>
  );
};

export default Error;
