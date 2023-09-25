import { StyledContainer, StyledRow } from "./components/styled-components";
import About from "./components/about";
import Profile from "./components/profile";
import Skills from "./components/skills";
import Formacao from "./components/formacao";
import Experiencias from "./components/experiencias";
import Contato from "./components/contato";
import Projetos from "./components/projetos";

export default function Main(props) {
  return (
    <StyledContainer>
      <StyledRow>
        <About config={props.config}/>
        <Profile config={props.config}/>
      </StyledRow>

      <StyledRow>
        <Skills config={props.config}/>
        <Formacao config={props.config}/>
      </StyledRow>

      <StyledRow>
        <Experiencias config={props.config}/>
        <Contato config={props.config}/>
      </StyledRow>
      <StyledRow>
        <Projetos config={props.config}/>
      </StyledRow>
    </StyledContainer>
  );
}
