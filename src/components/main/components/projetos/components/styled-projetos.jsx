import styled from 'styled-components';

export const StyledBox3 = styled.div`
    width: 100%;
    a{
        text-decoration: none
    }
    h2{
        margin: 25px 0;
        font-size: 32px;
    }
    h3{
        margin: 25px 0;
        font-size: 25px;
    }
    display: flex;
    flex-direction: column;
    border: 1px solid #cecece;
    padding: 30px;
    .fotoIcon {
        width: 45px;
        height: auto;
    }
    @media (max-width: 1024px) {
        width: auto;
    }
    @media (max-width: 768px) {
        width: auto;
        flex-direction: column;
        padding: 30px;
        max-width: 100%;
        h2{
            word-break: break-word;
            overflow-wrap: break-word;
            font-size: 24px;
            white-space: normal;
            max-width: 100%;

        }
    }
`;

export const StyledDivListaProjetos = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5% 0; /* Ajuste as margens para diferentes tamanhos de tela */
    justify-content: space-around;
    @media (max-width: 1024px) {
        margin: 4% 0; /* Ajuste as margens para telas menores */
        h3 {
            font-size: 18px;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 3% 0; /* Ajuste as margens para telas ainda menores */
        max-width: 100%;
        h2 {
            font-size: 18px;
        }
    }
`;

export const StyledDivProjeto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%; /* Use uma porcentagem adequada */
    max-width: 150px; /* Adicione um tamanho máximo */
    height: auto; /* Permite que a altura se ajuste ao conteúdo */
    @media (max-width: 1024px) {
        width: 40%; /* Ajuste a largura para telas menores */
        max-width: 90px;
    }
    @media (max-width: 768px) {
        width: 60%; /* Ajuste a largura para telas ainda menores */
        max-width: 100px;
    }
    @media (min-width: 768px) {
        width: 60%; /* Ajuste a largura para telas ainda menores */
        max-width: 100px;
    }
    .image-projeto {
        width: 80%;
        height: auto;
    }
    .image-projeto:hover {
        width: 80%;
        height: auto;
    }
`;

export const StyledDivConfigProjetos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;