import './residuos.css'
import Arvore from '../img/reciclearvore.png'

function Residuos(): JSX.Element{
    return(
        <>
        <div className='main'>
      <section id='projeto'></section>    
      <section className='quem_somos'>
            <h2 className='titulo'>Sobre o projeto: </h2>
            <div className='sobre_projeto'>

                <img src={Arvore} alt=''/>

                <div className='conteudo_textos'>
                    <h3><span>1</span>O que fazemos: </h3>
                    <p>Buscamos incentivar a redução de resíduos e o seu descarte correto dentro da usc</p>
                    <h3><span>2</span>Los mejores productos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam eius aspernatur ad
                        consequuntur aperiam minima sed dicta odit numquam sapiente quam eum, architecto animi pariatur,
                        velit doloribus laboriosam ut.</p>
                </div>
            </div>
        </section>
        </div>
        <br /><br />
        </>
    )
}

export default Residuos