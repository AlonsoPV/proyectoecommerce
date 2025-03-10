import { useProductContext } from "../../Hook/useProductContext";
import { Link } from 'react-router-dom';
import "./ArchivoProductos.css";

const ArchivoProductos = () => {
  const { list, loading, anadirCarrito, search, setSelectedProduct  } = useProductContext();

  // 🔍 Filtrar productos según el término de búsqueda
  const filteredProductList = list.filter((product) =>
    product.product_name.toLowerCase().includes(search.toLowerCase())
  );

  const mostrarProductos = filteredProductList.slice(0, 15);

  return (

    <section className="product-container">
      
      {loading ? (
        <h2>Cargando productos...</h2>
      ) : ( 
        mostrarProductos.map((product) => (
          <article key={product._id} className="product-card" onClick={() => {
            setSelectedProduct(product) 
          }}>
            
            <h3>{product.product_name}</h3>
            <Link to="/Detalle"  className="tarjeta_etiqueta"><svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" width="15px" fill="black">
    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
  </svg>
            </Link>
            <p>💰 Precio: ${product.price}</p>
            <p>📦 Categoría: {product.category}</p>
            <button onClick={() => anadirCarrito(product)}>🛒 Agregar al carrito</button>
            
          </article>
        ))
      )}
      
    </section>
  );
};

export default ArchivoProductos;
 