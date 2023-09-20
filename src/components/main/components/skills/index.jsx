import { StyledBox2, ContentWrapper } from "../styled-components";
import { StyledDivListaSkills, StyledHRPorcentagem } from "./components/styled-skills";

export default function Skills(props){
    return(
    <StyledBox2>
        <ContentWrapper>
          <img className="fotoIcon" src={props.config.images.main.star} alt="" />
          <></>
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
    )
}