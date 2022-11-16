import './header.css'


function Header(){
    return( 
        <header className="header">
            <a href="/">REGER</a>
            <nav>
                <ul className="menu">
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Quem Somos</a></li>
                    <li><a href="/">Onde Estamos</a></li>
                    <li><a href="/">Dicas</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header