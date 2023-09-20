import { StyledBox2, ContentWrapper } from "../styled-components";

export default function Profile(props){
    return(
        <StyledBox2>
            <ContentWrapper>
                <img className="fotoPerfil" src={props.config.images.main.profile} alt="" />
                <p>Nome: Talis André Padilha Duarte</p>
                <p>Nascimento: 02/04/1997</p>
                <p>Nacionalidade: Brasileiro</p>
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
    )
}