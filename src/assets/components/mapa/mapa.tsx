import './mapa.css'

function Mapa(){
    return(
        <section>
          
            <div className='divMapa'>
          
                <section id='mapa'></section>
                <hr/>
                <h2 className='tituloMapa'>ONDE ESTAMOS</h2>
                <div className='mapa'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4388.988819167909!2d-49.054894237209396!3d-22.327751207257233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf6777759ca131%3A0x653724cac51ff7ef!2sUNISAGRADO!5e0!3m2!1spt-BR!2sbr!4v1669153008250!5m2!1spt-BR!2sbr" width="600" height="450"></iframe>
                </div>
            </div>
           
        </section>
    )
}

export default Mapa