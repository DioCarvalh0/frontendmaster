import './residuos.css'

function Residuos(){
    return(
        <>
        <br /><br />
        <div className='tituloResi'>
            <h2>Como são destinados os resíduos sólidos</h2>
        </div>
        <section className='indiceResi'>
        <h2 className='subtituloResi'>No Brasil, são três os destinos principais:</h2>
        <div className ='conteudoResi'>
          <h3><span>1</span> - ATERRO SANITÁRIO</h3>
          <p>O solo é impermeabilizado,
            são colocadas camadas de terra sobre as
            camadas de resíduos compactados, o chorume é
            coletado e são instaladas chaminés para
            eliminação dos gases produzidos.</p>
            <h3><span>2</span> - ATERRO CONTROLADO</h3>
          <p>Não há impermeabilização
            do solo ou colocação de
            chaminés e tratamento do
            chorume, apenas
            colocação de camadas de
            terra e compactação dos
            resíduos.</p>
            <h3><span>3</span> - LIXÃO</h3>
          <p>Presente em 50%
            dos municípios do Brasil,
            os resíduos são
            depositados a céu
            aberto, não há
            tratamento do chorume.</p>

        </div>
        </section>
        </>
    )
}

export default Residuos