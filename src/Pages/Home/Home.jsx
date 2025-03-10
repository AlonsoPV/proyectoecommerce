import ArchivoProductos from "../../Components/ArchivoProductos";
import ProductoIndividual from "../../Components/ProductoIndividual";
import ReactHookForm from "../../Components/FormContacto";
import { ProductProvider } from "../../Context/ProductContext";
import Header from "../../Components/Header";
import "./Home.css";
 
const Home = () => {
  return (  
      <div className="home-container">
        <div className="left">
          <h2>🛍️ Productos</h2>
          {/* <Header/> */}
          <ArchivoProductos/>
        </div>
       {/*  <div className="right">
          <h2>📦 Detalle de Producto</h2>
          <ProductoIndividual/>
          
          
        </div> */}
      </div>
   
     
  );
};

export default Home;
