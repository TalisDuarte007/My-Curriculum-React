import { StyledBox1, ContentWrapper, StyledHR } from "../styled-components"
import { StyledDivFormacoes } from "./components/styled-formacao"


export default function Formacao(props){
    return(
        <StyledBox1>
                <ContentWrapper className="ContainerWrapperSpecial">
                <img className="fotoIcon" src={props.config.images.main.lampada} alt="" />
                <StyledHR></StyledHR>
                <h2>Formação</h2>

                <StyledDivFormacoes>
                    <h3>Unopar</h3>
                    <a className="linkAcessoDiploma"href="https://drive.google.com/file/d/1Q0dQNkwWR8mCa3ICEcvMQrxlfZPxJSCU/view?usp=drive_link">ADS (Análise e Desenvolvimento de Sistemas)</a>
                    <p className="textoFormacoes">Tecnólogo em Análise e Desenvolvimento de Sistemas. Concluído em Junho de 2023.</p>
                </StyledDivFormacoes>
                <StyledDivFormacoes>
                        <h3>Alura</h3>
                        <a className="linkAcessoDiploma" href="https://cursos.alura.com.br/degree/certificate/f994e2da-a4b3-43a0-bdcf-79eac2824cde">Formação Front-End</a>
                        <p className="textoFormacoes">Curso de 115horas focado em Front-End com HTML, CSS e JavaScript.</p>
                </StyledDivFormacoes>
                <StyledDivFormacoes>
                    <h3>Digital Innovation One</h3>
                    <div>
                        <a className="linkAcessoDiploma" href="https://www.dio.me/certificate/5E04ACF2/share">Santander Bootcamp Fullstack Developer</a>
                        <p className="textoFormacoes">Bootcamp de 120horas focado em FullStack com Angular e Java.</p>
                    </div>
                    <div>
                        <a className="linkAcessoDiploma" href="https://www.dio.me/certificate/7D833A67/share">Geração Tech Unimed-BH</a>
                        <p className="textoFormacoes">Bootcamp de 127horas focado em FullStack com Angular, MySQL e .NET.</p>
                    </div>
                </StyledDivFormacoes>
                </ContentWrapper>
    </StyledBox1>
    )
}