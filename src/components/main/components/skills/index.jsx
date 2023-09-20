import { StyledBox2, ContentWrapper, StyledHRPorcentagem } from "../styled-components";

export default function Skills(props){
    return(
    <StyledBox2>
        <ContentWrapper>
          <img className="fotoIcon" src={props.config.images.main.star} alt="" />
          <></>
          <h2>Skills</h2>

          <>
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
          </>

        </ContentWrapper>
    </StyledBox2>
    )
}