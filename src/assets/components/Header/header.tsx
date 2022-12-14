import './header.css'
import LogoReger from '../img/logoreger2.png'

function Header(){
    return( 
        <header id='headerid' className="header">
        
            <a href="https://unisagrado.edu.br/projetos/reger-reducao-na-geracao-de-residuos" target="_blank"><img src={LogoReger}/></a>
            <nav>
                <ul className="menu">
                    <li><a href="#projeto">O Projeto</a></li>
                    <li><a href="#oquefazemos">O Que Fazemos</a></li>
                    <li><a href="#comofazemos">Como Fazemos</a></li>
                    <li><a href="#alcance">Alcance</a></li>
                    <li><a href="#mapa">Onde Atuamos</a></li>
                    <li><a href="#dicasid">Dicas</a></li>
                </ul>
            </nav>
           
        </header>
        
    )
}

export default Header