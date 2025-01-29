function Produto( attr) {
    return ( 
        <div className="border-solid border w-1/5 bg-zinc-100 p-6" >

            <div className="text-center" >
        <img src="https://placehold.co/200"/>
            </div>
        <h2 className="text-lime-800" > {attr.nome} </h2>
        <p>R$ {attr.preco}</p>
        <p  >{attr.avaliar}</p>
        <button className="bg-black text-white" >{attr.botao}</button>

        </div>
     );
}

export default Produto;