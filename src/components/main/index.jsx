import { StyledBox1, StyledBox2, StyledContainer, StyledRow, ContentWrapper, StyledHR, StyledDivFormacoes, StyledDivListaSkills, StyledHRPorcentagem } from "./components/styled-components";

export default function Main(props) {
  return (
    <StyledContainer>
      <StyledRow>
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
        <StyledBox2>
            <ContentWrapper>
                <img className="fotoPerfil" src={props.config.images.main.profile} alt="" />
                <h4>Nome: Talis André Padilha Duarte</h4>
                <h4>Nascimento: 02/04/1997</h4>
                <h4>Nacionalidade: Brasileiro</h4>
                <ul className="lista-socials">
                    <li className="socials">
                        <a href="https://www.instagram.com/TalisDuarte007/">
                            <img className="image-socials" src={props.config.images.sociais.instagram} alt="#"/>
                        </a>
                    </li>
                    <li className="socials">
                        <a href="https://twitter.com/TalisDuarte007/">
                            <img className="image-socials" src={props.config.images.sociais.twitter} alt="#"/>
                        </a>
                    </li>
                    <li className="socials">
                        <a href="https://www.linkedin.com/in/talis-duarte-51ba9b161/">
                            <img className="image-socials" src={props.config.images.sociais.linkedin} alt="#"/>
                        </a>
                    </li>
                    <li className="socials">
                        <a href="https://github.com/TalisDuarte007">
                            <img className="image-socials" src={props.config.images.sociais.github} alt="#"/>
                        </a>
                    </li>
                </ul>
            </ContentWrapper>
        </StyledBox2>
      </StyledRow>
      <StyledRow>
        <StyledBox2>
            <ContentWrapper>
              <img className="fotoIcon" src={props.config.images.main.star} alt="" />
              <StyledHR></StyledHR>
              <h2>Skills</h2>

              <StyledDivListaSkills>
                <div className="item-skill-barra">
                  <p>60%</p>
                  <p>JavaScript</p>
                </div>
                <StyledHRPorcentagem></StyledHRPorcentagem>
                <div className="item-skill-barra">
                  <p>40%</p>
                  <p>TypeScript</p>
                </div>
                <StyledHRPorcentagem></StyledHRPorcentagem>
                <div className="item-skill-barra">
                  <p>40%</p>
                  <p>Angular</p>
                </div>
                <StyledHRPorcentagem></StyledHRPorcentagem>
                <div className="item-skill-barra">
                  <p>50%</p>
                  <p>React</p>
                </div>
                <StyledHRPorcentagem></StyledHRPorcentagem>
                <div className="item-skill-barra">
                  <p>90%</p>
                  <p>HTML</p>
                </div>
                <StyledHRPorcentagem></StyledHRPorcentagem>
                <div className="item-skill-barra">
                  <p>90%</p>
                  <p>CSS</p>
                </div>
                <StyledHRPorcentagem></StyledHRPorcentagem>
              </StyledDivListaSkills>

            </ContentWrapper>
        </StyledBox2>

        <StyledBox1>
            <ContentWrapper><img className="fotoIcon" src={props.config.images.main.lampada} alt="" />
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
      </StyledRow>
      <StyledRow>
      <StyledBox1>
            <ContentWrapper>

            </ContentWrapper>
        </StyledBox1>
        <StyledBox2>
            <ContentWrapper>

            </ContentWrapper>
        </StyledBox2>
      </StyledRow>
    </StyledContainer>
  );
}
