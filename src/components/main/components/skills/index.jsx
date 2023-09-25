import { StyledBox2, ContentWrapper, StyledHR } from "../styled-components";
import ProgressBar from "./components/progressbar";
import { StyledDivListaSkills } from "./components/styled-skills";

export default function Skills(props) {
    const skills = props.config.skills;

    return (
        <StyledBox2>
            <ContentWrapper>
                <div>
                    <img className="fotoIcon" src={props.config.images.main.star} alt="" />
                    <StyledHR/>
                    <h2>Skills</h2>
                </div>
                <div className="skills-container">
                    <StyledDivListaSkills>
                        {skills.map((skill, index) => (
                            <div className="item-skill-barra" key={index}>
                                <ProgressBar name={skill.name} percentage={parseInt(skill.percentage, 10)} />
                            </div>
                        ))}
                    </StyledDivListaSkills>
                </div>
                
                
            </ContentWrapper>
        </StyledBox2>
    );
}
