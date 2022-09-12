import * as S from "./style";

const cardProjects = (props: {
  srcc: string;
  alt: string;
  titulo: string;
  tituloSecond: string;
  href: string;
  number: string;
}) => {
  return (
    <S.imageProjects>
      <img src={props.srcc || undefined} alt={props.alt || undefined} />

      <S.informationProjects>
        <span>
          <span id="indicator">#{props.number}</span>
          {props.titulo}
        </span>
        <p>{props.tituloSecond}</p>
        <button>
          <a target="_blank" href={`${props.href}`}>
            preview site
          </a>
        </button>
      </S.informationProjects>
    </S.imageProjects>
  );
};
export default cardProjects;
