import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategorias/FormCategorias";
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DeletarProduto from "./components/produtos/deletarprodutos/DeletarProduto";
import FormularioProduto from "./components/produtos/formproduto/FormularioProduto";
import ListarProdutos from "./components/produtos/listarprodutos/ListarProdutos";
import Home from "./pages/home/Home";


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[90vh] bg-gray-200'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadastrarproduto" element={<FormularioProduto />} />
            <Route path="/editarproduto/:id" element={<FormularioProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App