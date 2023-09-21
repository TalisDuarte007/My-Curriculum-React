import { StyledBox2, ContentWrapper } from "../styled-components";
import ProgressBar from "./components/progressbar";
import { StyledDivListaSkills } from "./components/styled-skills";
//import ProgressBar from "./components/progressbar";

export default function Skills(props){
    return(
    <StyledBox2>
        <ContentWrapper>
          <img className="fotoIcon" src={props.config.images.main.star} alt="" />
          <></>
          <h2>Skills</h2>

          <StyledDivListaSkills>
            <div className="item-skill-barra">
              <ProgressBar name="JavaScript" percentage={60}/>
            </div>
            <div className="item-skill-barra">
              <ProgressBar name="TypeScript" percentage={40}/>
            </div>
            <div className="item-skill-barra">
             <ProgressBar name="Angular" percentage={40}/>
            </div>
            <div className="item-skill-barra">
              <ProgressBar name="React" percentage={50}/>
            </div>
            <div className="item-skill-barra">
              <ProgressBar name="HTML" percentage={90}/>
            </div>
            <div className="item-skill-barra">
              <ProgressBar name="CSS" percentage={90}/>
            </div>
          </StyledDivListaSkills>

        </ContentWrapper>
    </StyledBox2>
    )
}