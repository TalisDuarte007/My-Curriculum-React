import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 100px 500px 100px 500px;
    @media (max-width: 600px) {
        align-items: stretch; /* Garante que as divs tenham a mesma altura */
    }
`;

export const StyledRow = styled.div`
    display: flex;
    gap: 10px; /* Espaçamento entre as divs */
    align-items: stretch;
`;

export const StyledBox1 = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    border: 1px solid #cecece;
    padding: 30px;
`;

export const StyledBox2 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid #cecece;
    padding: 30px;
`;

export const ContentWrapper = styled.div`
    flex: 1; /* Preenche todo o espaço vertical disponível */
    h2{
        margin: 25px 0;
        font-size: 32px;
    }
    h3{
        margin: 25px 0;
        font-size: 25px;
    }
    h4{
        margin: 20px 0 20px 0;
        font-size: 18px;
    }
    p{
        margin: 25px 0;
        font-size: 15px;
    }
    .lista-socials{
    display: flex;
    flex-direction: row;
    }
    .socials{
        margin-right: 15px;
    }
    ul {
	    list-style: none;
        padding: 0
    }

    .lista-skills{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 30px 20px 0 20px;
    }
    .skills > a > img{
        width: 60px;
        height: auto;
    }

    .image-socials{
        max-width: 30px;
        max-height: auto;
    }
    .fotoPerfil{
        border-radius: 10px 30px 20px 30px;
        width: 100%;
        height: auto;
        //margin: 0 auto;
        padding: auto;
        margin: 30px 0 30px 0;
    }
    .fotoIcon {
        width: 45px;
        height: auto;
    }
`;

export const StyledHR = styled.hr`
    border-top: 1px solid #bbb;
    width: 40px;
    display: block;
    margin: 18px 0 0 0;
`;

export const StyledHRPorcentagem = styled.hr`
    width: 100%;
    border-color: white ;`;

export const StyledDivFormacoes = styled.div`
    .linkAcessoDiploma{
        color: white;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 120%;
        font-weight: bolder;
        vertical-align: baseline;
        list-style: none;
	    text-decoration: none;
    }
    div{
        margin-bottom: 20px;
    }
    .textoFormacoes{
        margin: 0;
        margin-top: 5px;
    }
`;

export const StyledDivListaSkills = styled.div`
    .item-skill-barra{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 50px;
    }
    p{
        margin: 0;
    }
    display: flex;
    flex-direction: column;
    margin: 30px 0 30px 0 ;
    width: 350px;
`;
