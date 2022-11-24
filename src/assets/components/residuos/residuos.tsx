import './residuos.css'
import Arvore from '../img/reciclearvore.png'

function Residuos(): JSX.Element{
    return(
        <>
        <div className='main'>
        <div className='center'>      
        <section id='projeto'></section>    
        <section className='quem_somos'>
              <h2 className='titulo'>Sobre o projeto: </h2>
              <div className='sobre_projeto'>

                  <img src={Arvore} alt=''/>

                  <div className='conteudo_textos'>
                  <section id='oquefazemos'></section>
                  <h3><span>1</span>O que fazemos: </h3>
                    <p>O alvo deste projeto é reduzir os resíduos e, para tanto, 
                    teremos que tomar medidas no sentido de reduzir o consumo ou, 
                    pelo menos modificar a forma como o fazemos e modificar hábitos de consumo.</p>
                    <section id='comofazemos'></section>  
                    <h3><span>2</span>Como atuamos: </h3>
                    <p>O conceito de desenvolvimento sustentável é bastante abrangente e o tema da sustentabilidade é recente e, portanto, trata-se essencialmente de um processo em construção.
                    A partir da justificativa acima e da importância da temática educação para o desenvolvimento sustentável em IES,
                    o objetivo deste trabalho é implementar o tema sustentabilidade no campus do Centro Universitário Sagrado Coração.</p>
                    <section id='alcance'></section>                    
                    <h3><span>3</span>O que alcançamos</h3>
                    <p>Até o momento tivemos 189 pessoas atendidas de forma direta e 8.340 
                    atendimentos de forma indireta pelo projeto.</p>
                  </div>
              </div>
          </section>
          </div>
          </div>
          <br /><br />
        </>
    )
}

export default Residuos