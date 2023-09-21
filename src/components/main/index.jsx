import { StyledBox1, StyledBox2, StyledContainer, StyledRow, ContentWrapper } from "./components/styled-components";
import About from "./components/about";
import Profile from "./components/profile";
import Skills from "./components/skills";
import Formacao from "./components/formacao";
import ProgressBar from "./components/skills/components/progressbar";

export default function Main(props) {
  return (
    <StyledContainer>

    <ProgressBar name="Java" percentage={50} />

      <StyledRow>
        <About config={props.config}/>
        <Profile config={props.config}/>
      </StyledRow>

      <StyledRow>
        <Skills config={props.config}/>
        <Formacao config={props.config}/>
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
