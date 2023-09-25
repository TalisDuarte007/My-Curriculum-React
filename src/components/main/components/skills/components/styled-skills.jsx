import styled from 'styled-components';

export const StyledDivListaSkills = styled.div`
    .skills-container{
        
    }
    .item-skill-barra{
        display: flex;
        flex-direction: column;
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
    @media (max-width: 1024px) {
        width: 80%;
    }
`;


export const ProgressBarContainer = styled.div`
    border-radius: 50px;
    width: 100%;
    height: 7px; /* Altura da barra de progresso */
    background-color: white; /* Cor de fundo da barra */

    /* Use um gradiente linear para a cor da barra com base na porcentagem */
    background-image: linear-gradient(to right, black ${props => props.percentage}%, white ${props => props.percentage}%);
`;

export const ProgressBarConfig = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;