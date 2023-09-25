import { StyledBox1, ContentWrapper, StyledHR } from "../styled-components"

export default function Experiencias(props) {
    const listaExperiencias = props.config.profile.experiencias;
    
    return (
        <StyledBox1>
            <ContentWrapper>
                <img className="fotoIcon" src={props.config.images.main.sobre} alt="" />
                <StyledHR />
                <h2>Experiências</h2>
                {listaExperiencias.map((experiencia, index) => {
                    return (
                        <div key={index}>
                            <h3>{experiencia.name}</h3>
                            <p>{experiencia.descricao}</p>
                        </div>
                    );
                })}
            </ContentWrapper>
        </StyledBox1>
    );
}
