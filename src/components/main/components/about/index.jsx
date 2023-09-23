import { StyledBox1, ContentWrapper, StyledHR } from "../styled-components";

export default function About (props){   
    const stackLinks = props.config.stacks;
    return(
        <StyledBox1>
            <ContentWrapper>
                <img className="fotoIcon" src={props.config.images.main.sobre} alt="" />
                <StyledHR></StyledHR>
                <h2>Sobre Mim</h2>
                <p>Apaixonado por ciências e técnologia. Já fui graduando de Física pela UCS, mas não pude terminar o curso. Hoje sou formado em Análise e Desenvolvimento pela Unopar, e estou terminando minha Pós-Graduação em Engenharia de Software. Desde 2021, quando eu entrei na nova graduação, eu tenho me dedicado inteiramente a programação. Além da graduação, eu faço diversos cursos e bootcamps.</p>
                <img className="fotoIcon" src={props.config.images.main.hobbies} alt="" />
                <StyledHR></StyledHR>
                <h2>Hobbies</h2>
                <p>Estudar | Jogar | Ler | Assistir filmes e séries</p>
                <img className="fotoIcon" src={props.config.images.main.stacks} alt="" />
                <StyledHR></StyledHR>
                <h2>Minhas Stacks</h2>
                <ul className="lista-skills">
                        {stackLinks.map((link, index) => (
                                <li className="skills" key={index}>
                                <img src={link.link} alt="#" />
                                </li>
                        ))}
                </ul>

            </ContentWrapper>
        </StyledBox1>
    )

}