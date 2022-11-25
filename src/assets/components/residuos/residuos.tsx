import './residuos.css'
import Arvore from '../img/reciclearvore.png'
import Dicasimg from '../img/dicasimg.png'

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
                  <h3><span>1</span>O que fazemos:</h3>
                    <p>O alvo deste projeto é reduzir os resíduos e, para tanto, 
                    teremos que tomar medidas no sentido de reduzir o consumo ou, 
                    pelo menos modificar a forma como o fazemos e modificar hábitos de consumo.</p>
                    <section id='comofazemos'></section>  
                    <h3><span>2</span>Como atuamos:</h3>
                    <p>O conceito de desenvolvimento sustentável é bastante abrangente e o tema da sustentabilidade é recente e, portanto, trata-se essencialmente de um processo em construção.
                    A partir da justificativa acima e da importância da temática educação para o desenvolvimento sustentável em IES,
                    o objetivo deste trabalho é implementar o tema sustentabilidade no campus do Centro Universitário Sagrado Coração.</p>
                    <section id='alcance'></section>                    
                    <h3><span>3</span>O que alcançamos:</h3>
                    <p>Até o momento tivemos 189 pessoas atendidas de forma direta e 8.340 
                    atendimentos de forma indireta pelo projeto.</p>
                    <section id='sobrenos'></section>                    
                    <h3><span>4</span>Sobre nós</h3>
                    <p>Até o momento tivemos 189 pessoas atendidas de forma direta e 8.340 
                    atendimentos de forma indireta pelo projeto.</p>
                  </div>
              </div>
          </section>
          <hr/>
          <section className='quem_somos'>
              <h2 id='dicasid' className='titulo'>Dicas</h2>
              <div className='sobre_projeto'>

                  <img src={Dicasimg} alt=''/>

                  <div className='conteudo_textos'>
                  <h3><span>1</span>Siga sempre os 4Rs!</h3>
                    <p><h4>Reduzir:</h4><hr className='line'/><hr className='line'/> Consumir menos produtos e preferir os que oferecem menor potencial de geração de resíduos e possuam maior
                        durabilidade.
                        <h4>Reutilizar:</h4><hr className='line'/><hr className='line'/>
                        Use novamente as embalagens!
                        <h4>Reciclar:</h4><hr className='line'/><hr className='line'/>
                        Transformação dos materiais para a produção de matéria-prima para outros produtos por meio de processos industriais
                        ou artesanais. É fabricar um produto a partir de um material usado.
                        <h4>Repensar:</h4><hr className='line'/><hr className='line'/>
                        Repense sempre sobre seus atos de consumo e os impactos que eles provocam sobre você mesmo, a economia, as relações
                        sociais e a natureza.
                    </p>
                    <h3><span>2</span>Seja consciente, jogue lixo no lixo!</h3>
                    <p>Faça o descarte de resíduos de forma correta, sempre os separe da maneira correta e respeite as indicações nos latões
                        de lixo, coloque vidro com vidro, metal com metal, plástico com plástico, conforme indicam em letras e cores!
                    </p>
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