import { StyledBox1, ContentWrapper, StyledHR } from "../styled-components"
import { StyledDivFormacoes } from "./components/styled-formacao"


export default function Formacao(props) {
    const listaFormacoes = Object.keys(props.config.main.formacoes)

    return (
        <StyledBox1>
            <ContentWrapper className="ContainerWrapperSpecial">
                <img className="fotoIcon" src={props.config.images.main.lampada} alt="" />
                <StyledHR />
                <h2>Formação</h2>
                {listaFormacoes.map((listaFormacao, index) => {
                    const cursos = props.config.main.formacoes[listaFormacao];
                    return (
                        <div key={listaFormacao}>
                            <StyledDivFormacoes>
                                <h3>{listaFormacao}</h3>
                                <div>
                                    {cursos.map((curso) => (
                                        <div key={curso.link}>
                                            <a className="linkAcessoDiploma" target="_blank" href={curso.link} rel="noreferrer">{curso.nome}</a>
                                            <p className="textoFormacoes">{curso.info}</p>
                                        </div>
                                    ))}
                                </div>
                            </StyledDivFormacoes>
                            {index !== listaFormacoes.length - 1 && <StyledHR key={`hr_${listaFormacao}`} />}
                        </div>
                    );
                })}
            </ContentWrapper>
        </StyledBox1>
    )
}
