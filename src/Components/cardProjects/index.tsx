import * as S from "./style";
import paste from "../../assets/pasta.webp";
import github from "../../assets/github.webp";
import live from "../../assets/live.webp";

const cardProjects = (props: {
  srcc: string;
  imageTablet: string;
  imageMoble: string;
  alt: string;
  titulo: string;
  tituloSecond: string;
  href: string;
}) => {
  /*
   */
  return (
    <S.imageProjects data-aos="zoom-in">
      <S.imageResponsive>
        <source
          media="(max-width: 425px)"
          srcSet={`${props.imageMoble}`}
          type="image/png"
        />

        <source
          media="(max-width: 1115px)"
          srcSet={`${props.imageTablet}`}
          type="image/png"
        />
        <img src={props.srcc || undefined} alt={props.alt || undefined} />
      </S.imageResponsive>

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
