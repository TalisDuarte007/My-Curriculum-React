import { StyledCopyright, StyledVoltarAoTopo } from "./components/styled-footer";

export default function Footer()  {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <StyledCopyright>
                &copy; Talis Duarte {currentYear}
                <StyledVoltarAoTopo href="#top">
                    <img src="https://uploaddeimagens.com.br/images/004/617/657/full/icons8-topo-80.png?1695579555" alt=""/>
                    <p>Voltar ao Topo</p>
                </StyledVoltarAoTopo>
                
            </StyledCopyright>
        </footer>
    );
};