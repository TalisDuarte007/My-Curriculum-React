import { StyledBox1, ContentWrapper, StyledHR } from "../styled-components";

export default function About (props){   
    return(
        <StyledBox1>
            <ContentWrapper>
                <img className="fotoIcon" src={props.config.images.main.sobre} alt="" />
                <StyledHR></StyledHR>
                <h2>Sobre Mim</h2>
                <p>Apaixonado por ciências e técnologia. Já fui graduando de Física pela UCS, mas não pude terminar o curso, agora estudo Análise e Desenvolvimento pela Unopar. Desde 2021, quando eu entrei na nova graduação, eu tenho me dedicado inteiramente a programação. Além da graduação, eu faço diversos cursos e bootcamps.</p>
                <img className="fotoIcon" src={props.config.images.main.hobbies} alt="" />
                <StyledHR></StyledHR>
                <h2>Hobbies</h2>
                <p>Estudar | Jogar | Ler | Assistir filmes e séries</p>
                <img className="fotoIcon" src={props.config.images.main.stacks} alt="" />
                <StyledHR></StyledHR>
                <h2>Minhas Stacks</h2>
                <ul className="lista-skills">
                    <li className="skills">
                       
                            <img src="https://img.icons8.com/color/48/html-5--v1.png" alt="#"/>
                        
                    </li>
                    <li className="skills">
                       
                            <img src="https://img.icons8.com/color/48/css3.png" alt="#"/>
                        
                    </li>
                    <li className="skills">
                       
                            <img src="https://img.icons8.com/color/48/javascript--v1.png" alt="#"/>
                        
                    </li>
                    <li className="skills">
                       
                            <img src="https://img.icons8.com/color/48/typescript.png" alt="#"/>
                        
                    </li>
                    <li className="skills">
                       
                            <img src="https://img.icons8.com/color/48/angularjs.png" alt="#"/>
                        
                    </li>
                    <li className="skills">
                       
                            <img src="https://img.icons8.com/color/48/react-native.png" alt="#"/>
                        
                    </li>
                    <li className="skills">
                      <img src="https://img.icons8.com/color/48/git.png" alt="#"/>
                    </li>
                    <li className="skills">
                      <img src="https://img.icons8.com/color/48/github--v1.png" alt="#"/>
                    </li>
                </ul>
            </ContentWrapper>
        </StyledBox1>
    )

}