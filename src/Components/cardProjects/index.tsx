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
    <S.imageProjects>
      <img src={props.srcc || undefined} alt={props.alt || undefined} />

      <S.informationProjects>
        <S.images__links>
          <img src={paste} alt="" />
          <S.images__nav>
            <img src={github} alt="" />
            <img src={live} alt="" />
          </S.images__nav>
        </S.images__links>
        <span>{props.titulo}</span>
        <p>{props.tituloSecond}</p>
        <S.alignButton>
          <button>preview site</button>
        </S.alignButton>
      </S.informationProjects>
    </S.imageProjects>
  );
};
export default cardProjects;
