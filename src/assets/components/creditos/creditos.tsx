import './creditos.css'


function Creditos(){
    return(
        <>
        <div className='background'>
        <hr/>
        <section className='credit'>
            <div className='creditos'>
                <ul className='resp'>
                    <h3>RESPONSÁVEIS</h3>
                    <li>Ciência da Computação: Prof. Me. Vinícius</li>
                    <li>Desgin: Prof. Me. XXXXXX</li>
                </ul>
            </div>
            <div className='creditos'>
                <ul className='dev'>
                    <h3>DESENVOLVEDORES</h3>
                    <li>Diogo de Paula Carvalho</li>
                    <li>João Paulo</li>
                    <li>Leandro Albranti</li>
                </ul>
            </div>
            <div className='creditos'>
                <ul className='desi'>
                    <h3>DESIGNERS</h3>
                    <li>Gustavo</li>
                    <li>Marcus</li>
                    <li>Ananda</li>
                    <li>Rafael</li>
                </ul>
            </div>
        </section>
        </div>
        </>
    )
}

export default Creditos