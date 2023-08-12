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
    .fotoPerfil{
        border-radius: 10px 30px 20px 30px;
        width: 100%;
        heigh: auto;
        margin: 0 auto;
        padding: auto
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