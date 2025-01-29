import Menu from "./components/Menu";
import Produto from "./components/Produto";

export default function Home() {
  return (

    <div>

      <Menu/>      

    <h1>Enviando paro o GitHub</h1>

    <p>Atividade em andamento...</p>

    <p>Testando uma nova versão</p>

    <h2>Produtinhos</h2>

    <div className="flex justify-around" >

    <Produto nome="Cappuccino c/ limão" preco="10,00" avaliar="⭐" botao="Comprar" />
    <Produto nome="Café" preco="5,00" />
    <Produto nome="Café c/ Leite" preco="7,00" />
    <Produto nome="Chá" preco="4,00" />

    </div>

    </div>

  )
}
