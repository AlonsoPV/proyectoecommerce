import { useProductContext } from "../../Hook/useProductContext"
import "./productoIndividual.css";

const ProductoIndividual = () => {
  const {selectedProduct} = useProductContext()
  return (
    <>
    {
      selectedProduct.product_name
        ? (  
          <div className="tarjeta">
            <img className="tarjeta_imagen" src={selectedProduct.image} alt={selectedProduct.product_name} />
            <h4 className="tarjeta_etiqueta">Ver más</h4>
            <h4 className="tarjeta_nombre">{selectedProduct.product_name}</h4>
            <h5 className="tarjeta_descripcion">{selectedProduct.description}</h5>
            <h6 className="tarjeta_precio">$ {selectedProduct.price} MXN</h6>
            <button onClick={() => anadirCarrito(product)}>🛒 Agregar al carrito</button>
          </div>
          )
        : <h1> selecciona un producto...</h1>
    }
  </>
  )
}

export default ProductoIndividual