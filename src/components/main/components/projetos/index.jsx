import { StyledBox3, StyledDivListaProjetos, StyledDivProjeto, StyledDivConfigProjetos } from "./components/styled-projetos"
import { StyledHR } from "../styled-components"

export default function Projetos(props) {
    const projetos = props.config.projetos;
    return (
        <StyledBox3>
                <img className="fotoIcon" src={props.config.images.main.projetos} alt="" />
                <StyledHR />
                <h2>Confira meus projetos no Github</h2>
                <StyledDivListaProjetos>
                    {projetos.map((projeto, index) => {
                        return (
                            <StyledDivConfigProjetos key={index}>
                                <StyledDivProjeto>
                                    <a href={projeto.url}><img className="image-projeto" src={projeto.image} alt="" /></a>
                                </StyledDivProjeto>
                                <h3>{projeto.descricao}</h3>
                            </StyledDivConfigProjetos>
                        )
                    })}
                </StyledDivListaProjetos>
        </StyledBox3>
    )
}
