import './header.css'


function Header(){
    return( 
        <header className="header">
            <a href="/">REGER</a>
            <nav>
                <ul className="menu">
                    <li><a href="#projeto">O Projeto</a></li>
                    <li><a href="#oquefazemos">O Que Fazemos</a></li>
                    <li><a href="#comofazemos">Como Fazemos</a></li>
                    <li><a href="#crescemos">Crescemos</a></li>
                    <li><a href="#mapa">Onde Estamos</a></li>
                    <li><a href="#dicas">Dicas</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header