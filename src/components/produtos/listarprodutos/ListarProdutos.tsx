import { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import Produto from "../../../model/Produto";
import { listar } from "../../../services/Service";
import CardProdutos from "../cardprodutos/CardProdutos";


function ListarProdutos() {

  const [produtos, setProdutos] = useState<Produto[]>([]);


  async function buscarProdutos() {
    await listar('/produtos', setProdutos);
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <>

      {produtos === undefined && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="
                bg-gray-200 
                flex 
                justify-center
                ">
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
          {produtos.map((produto) => (
            <CardProdutos key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListarProdutos;