import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 1400px;
    width: 95%;
    padding: 20px; /* Adicione preenchimento para melhor aparência */
    box-sizing: border-box;
    margin: 0 auto;
    @media (max-width: 1200px) {
        
    }
    @media (max-width: 1024px) {
        /* Estilos para tablets em orientação retrato */
    }


    //@media (max-width: 600px) {
     //   align-items: stretch; /* Garante que as divs tenham a mesma altura */
    //}
`;

export const StyledRow = styled.div`
    display: flex;
    gap: 10px; /* Espaçamento entre as divs */
    align-items: stretch;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
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
        @media (max-width: 1024px) {
            width: 60%;
        }
    }
    .fotoIcon {
        width: 45px;
        height: auto;
    }
    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const StyledHR = styled.hr`
    border-top: 1px solid #bbb;
    width: 40px;
    display: block;
    margin: 18px 0 0 0;
`;