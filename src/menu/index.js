import './menu.css';


const Menu = () => {
    return(
        <div className="menu">
        <img src="/imagens/logo.svg" alt="logo"/>
        <div>
            <a href="#">Como fazer</a>
            <p>/</p>
            <a href="#">Ofertas</a>
            <p>/</p>
            <a href="#">Depoimentos</a>
            <p>/</p>
            <a href="#">Vídeos</a>
            <p>/</p>
            <a href="#">Meu carrinho</a>
        </div>
        </div>
    );
}
export default Menu;