import { StyledBox2, ContentWrapper, StyledHR } from "../styled-components"

export default function Contato(props){
    return(
        <StyledBox2>
            <ContentWrapper>
                <img className="fotoIcon" src={props.config.images.main.contato} alt="" />
                <StyledHR/>
                <h2>Contato</h2>
                <p>Endereço: {props.config.profile.contato.endereco}</p>
                <a className="link-contato" href="mailto:tcd07@hotmail.com"><p>E-Mail: {props.config.profile.contato.email}</p></a>
                <a className="link-contato" href="https://api.whatsapp.com/send?phone=54996268282"><p>whatsApp: {props.config.profile.contato.whatsapp}</p></a>
            </ContentWrapper>
        </StyledBox2>
    )
}