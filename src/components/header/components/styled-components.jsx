import config from "../../../config.json"
import styled from 'styled-components';

export const StyledHeader = styled.div`
    background-image: url(${config.images.header.bg});
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 50px 0 50px 0;
    img {
        width: 90px;
        height: auto;
    }
    h1 {
        font-size: 45px;
        margin: 30px 0 30px 0;
        font-weight: 600px
    }
    h2{
        font-size: 18px;
        font-weight: 500;
        margin: 16px 0 16px 0;
    }

    /* Estilos para telas de tamanho médio (768px - 992px) */
    @media (max-width: 992px) {
      h1 {
        font-size: 40px;
      }
    }
    
    /* Estilos para telas pequenas (480px - 768px) */
    @media (max-width: 768px) {
      h1 {
        font-size: 35px;
      }
    }
    
    /* Estilos para telas extra pequenas (320px - 480px) */
    @media (max-width: 480px) {
      h1{
        font-size: 20px;
      }
      h2 {
        font-size: 15px;
      }
    }

`;