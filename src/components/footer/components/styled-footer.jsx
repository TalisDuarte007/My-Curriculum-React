import styled from 'styled-components';

export const StyledCopyright = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 300px;
    a{
        text-decoration: none;
        color: white;
    }
`;

export const StyledVoltarAoTopo = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center; /* Centraliza verticalmente dentro desta div */
    gap: 10px;
    text-align: center;
    img{
        width: 40px;
    }
`;