import { StyledBox2, ContentWrapper } from "../styled-components";
import ProgressBar from "./components/progressbar";
import { StyledDivListaSkills } from "./components/styled-skills";

export default function Skills(props) {
    const skills = props.config.skills;

    return (
        <StyledBox2>
            <ContentWrapper>
                <img className="fotoIcon" src={props.config.images.main.star} alt="" />
                <></>
                <h2>Skills</h2>

                <StyledDivListaSkills>
                    {skills.map((skill, index) => (
                        <div className="item-skill-barra" key={index}>
                            <ProgressBar name={skill.name} percentage={parseInt(skill.percentage, 10)} />
                        </div>
                    ))}
                </StyledDivListaSkills>
            </ContentWrapper>
        </StyledBox2>
    );
}
