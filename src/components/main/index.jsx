import { StyledBox1, StyledBox2, StyledContainer, StyledRow, ContentWrapper, StyledHR } from "./components/styled-components";

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
                <h3>Hobbies</h3>
                <p>Estudar | Jogar | Ler | Assistir filmes e séries</p>
                <img className="fotoIcon" src={props.config.images.main.stacks} alt="" />
                <StyledHR></StyledHR>
                <h3>Minhas Stacks</h3>
            </ContentWrapper>
        </StyledBox1>
        <StyledBox2>
            <ContentWrapper>
                <img className="fotoPerfil" src={props.config.images.main.profile} alt="" />
                <h4>Nome: Talis André Padilha Duarte</h4>
                <h4>Nascimento: 02/04/1997</h4>
                <h4>Nacionalidade: Brasileiro</h4>
            </ContentWrapper>
        </StyledBox2>
      </StyledRow>
      <StyledRow>
        <StyledBox2>
            <ContentWrapper>

            </ContentWrapper>
        </StyledBox2>
        <StyledBox1>
            <ContentWrapper>

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
