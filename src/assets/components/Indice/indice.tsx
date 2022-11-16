import './indice.css'
import beatriz from '../img/beatriz-removebg-preview.png'
import dulce from '../img/dulce-removebg-preview.png'

function Indice(){
    return(
        <body>
            <h1>REGER</h1>
            <section className='indice1'>
                <div>
                    <h3 className='border'>
                        O CONCEITO DE SUSTENTABILIDADE
                    </h3>
                    <p>
                        Ações e atividades que visam atender as necessidades humanas atuais, 
                        sem comprometer o futuro das próximas gerações”. Vivemos um momento crítico com 
                        relação à geração excessiva de resíduos. Cabe a você desenvolver ações sustentáveis que visam à redução 
                        dos resíduos gerados. E também destinar de forma correta esses resíduos.
                    </p>
                </div>                
            </section>
            <section className='autoras'>
                <h2>O que dizem as autoras</h2>
                <div className='cards'>
                    <img src={beatriz}/>
                    <div className='card1'>
                        <h4>Beatriz Antoniassi</h4>
                        <p>
                            "Buscamos a sustentabilidade a longa prazo,
                            porém sabemos que esse objetivo nunca será
                            atingido.
                            Dessa forma cabe a nós desenvolvermos
                            ações que irão atuar como pequenos degraus
                            em direção a um mundo sustentável.
                            Dentre essas ações está a redução dos resíduos gerados".
                        </p>
                    </div>
                    <img src={dulce}/>
                    <div className='card2'>
                        <h4>Dulce H. J. Constantino</h4>
                        <p>
                            "Evoluímos em vários setores, especialmente
                            nos setores produtivos, e com isso
                            aumentamos a nossa capacidade de gerar
                            resíduos. O momento atual exige de nós  ações
                            mais pontuais.
                            Precisamos sair da nossa área de conforto e
                            não só destinarmos corretamente os resíduos
                            produzidos, mas também reduzir a produção
                            dos mesmos na medida do possível,
                            trabalhando hoje para garantir o amanhã".
                        </p>
                    </div>
                </div>
            </section>
        </body> 
    )
}

export default Indice