import { StyledHeader } from "./components/styled-components";

export default function Header(props){
    return(
        <StyledHeader id="top">
            <img src={props.config.images.header.dev} alt="" />
            <h1>Talis André Padilha Duarte</h1>
            <h2>Desenvolvedor | Front-End</h2>
        </StyledHeader>
    );
}
