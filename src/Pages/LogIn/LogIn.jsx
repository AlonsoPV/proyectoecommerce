import ArchivoProductos from "../../Components/ArchivoProductos";
import ProductoIndividual from "../../Components/ProductoIndividual";
import ReactHookForm from "../../Components/FormContacto";
import { ProductProvider } from "../../Context/ProductContext";
import Header from "../../Components/Header";
import "./LogIn.css";
 
const Home = () => {
  return (
  
     <ProductProvider>
     
      <div className="home-container">
      
        <ReactHookForm/>
        {/* <div className="right">
          <h2>Ingresa tu correo y contraseña:</h2>
          

        </div> */}
      </div>
    </ProductProvider>
     
  );
};

export default Home;
