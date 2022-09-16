import * as S from "./style";
import paste from "../../assets/pasta.webp";
import github from "../../assets/github.webp";
import live from "../../assets/live.webp";

const cardProjects = (props: {
  srcc: string;
  alt: string;
  titulo: string;
  tituloSecond: string;
  href: string;
}) => {
  return (
    <S.imageProjects data-aos="zoom-in">
      <img
        width="500px"
        height="100%"
        src={props.srcc || undefined}
        alt={props.alt || undefined}
      />

      <S.informationProjects>
        <S.images__links>
          <img src={paste} alt="image file" />
          <S.images__nav>
            <img src={github} alt="image github" />
            <img src={live} alt="image icon live brodcast" />
          </S.images__nav>
        </S.images__links>
        <span>{props.titulo}</span>
        <p>{props.tituloSecond}</p>
        <S.alignButton>
          <a href={`${props.href}`} target="_blank" rel="noreferrer">
            <button>preview site</button>
          </a>
        </S.alignButton>
      </S.informationProjects>
    </S.imageProjects>
  );
};
export default cardProjects;
