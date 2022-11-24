import './creditos.css'
import Logo from '../img/logouni.png'

function Creditos(){
    return(
        <>
    <footer>
    <div className='creditos'>
        
        <div className='equipes'>
                <h4>Turma Ciência da Computação</h4>
                <p>Diogo de Paula Carvalho</p>
                <p>João Paulo Marques Rodrigues Junior</p>
                <p>Leandro Albranti</p>
            </div>
            <div className="equipes">
                <h4>Professores Orientadores</h4>
                <p>Professora Dra. Sileide Aparecida Paccola</p>
                <p>Professor Dr. Vinicius Santos Andrade</p>
              
            </div>
            <div className="equipes">
                <h4>Turma de Design</h4>
                <p>Ananda Pansanato Porto</p>
                <p>Gustavo Silva Costa</p>
                <p>Rafael Cassado Andreassa</p>
            </div>
        </div>
        <li className="Logo">
        <div className="card">
          <a href="https://unisagrado.edu.br/"><img src={Logo}/></a>
          <h2 className="titulo-final">&copy; PROJETO EXTENSIONISTA - LPII
          <h2 className="titulo-final">UNISAGRADO</h2></h2>
        </div>
        </li>

    </footer>
        </>
    )
}

export default Creditos