import './minhasPlantas.css'

const MinhasPlantas = () => {
  return(
    <section className='minhasPlantas'>
        <img className='img-planta' src='./imagens/rectangle4.png' alt='Minhas plantas'/>
    <div className='div-planta'>
        <div>
        <p>Como conseguir </p>
        <h1>minha planta</h1>
        </div>
        <div className='div-minhas'>
        <img src='./imagens/ellipse1.svg' alt='bola amarela'/>
        <p>Escolha suas plantas</p>
        </div>
        <div className='div-minhas'>
        <img src='./imagens/ellipse1.svg' alt='bola amarela'/>
        <p>Faça seu pedido</p>
        </div>
        <div className='div-minhas'>
        <img src='./imagens/ellipse1.svg' alt='bola amarela'/>
        <p>Aguarde na sua casa</p>
        </div>
     </div>
    </section>
  )
}
export default MinhasPlantas