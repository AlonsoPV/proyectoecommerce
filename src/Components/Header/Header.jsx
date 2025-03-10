import { useProductContext } from "../../Hook/useProductContext";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  const { list, anadirCarrito, setSearch, numProductos} = useProductContext();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="header__container">
      <div className="header__content">

      <div className="header__nav"> 
          <Link to="/" className="header__nav-item">Home</Link>
          <Link to="/Detalle" className="header__nav-item">Detalle</Link>
          <Link to="/LogIn" className="header__nav-item">LogIn</Link>
          🛒:<b>{numProductos}</b>
          
        </div>

        <div className="header__search-product">
          {list.length > 0 ? (
            <>
              <input
                className="header__input-search"
                type="search"
                placeholder="Buscar un producto..."
                onChange={handleSearch}
              />

              {/* <div className="header__seleccion">
                <span className="header__seleccionado">Producto actual:</span>
                <span className="header__productoindividual">
                  🛒 {selectedProduct?.product_name} - {selectedProduct?.category}
                </span>
              </div> */}
            </>
          ) : (
            <h2>Cargando...</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
