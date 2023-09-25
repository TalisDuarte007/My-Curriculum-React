import { StyledBox2, ContentWrapper } from "../styled-components";

export default function Profile(props) {
    const profile = props.config.profile;

    return (
        <StyledBox2>
            <ContentWrapper>
                <div className="image-container">
                    <img className="fotoPerfil" src={profile.photo} alt="" />
                </div>
                <div className="text-container">
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
                </div>
            </ContentWrapper>
        </StyledBox2>
    );
}
