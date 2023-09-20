import styled from 'styled-components';

export const StyledDivFormacoes = styled.div`
    width: 100%;
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
        @media (max-width: 1024px) {
            justify-content: baseline;
        }
    }
    div{
        margin-bottom: 20px;
    }
    .textoFormacoes{
        margin: 0;
        margin-top: 5px;
    }
`;