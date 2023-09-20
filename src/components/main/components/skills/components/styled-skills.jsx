import styled from 'styled-components';

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
    @media (max-width: 1024px) {
        width: 80%;
    }
`;