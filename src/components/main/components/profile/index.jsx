import { StyledBox2, ContentWrapper } from "../styled-components";

export default function Profile(props) {
    const profile = props.config.profile;

    return (
        <StyledBox2>
            <ContentWrapper>
                <img className="fotoPerfil" src={profile.photo} alt="" />
                <p>Nome: {profile.nome}</p>
                <p>Nascimento: {profile.nascimento}</p>
                <p>Nacionalidade: {profile.nascionalidade}</p>
                <ul className="lista-socials">
                    {profile.socialLinks.map((link, index) => (
                        <li className="socials" key={index}>
                            <a href={link.url}>
                                <img className="image-socials" src={link.imageSrc} alt={`#${link.name}`} />
                            </a>
                        </li>
                    ))}
                </ul>
            </ContentWrapper>
        </StyledBox2>
    );
}
