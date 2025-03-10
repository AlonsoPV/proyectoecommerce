import { createContext, useState, useEffect} from "react";
import productos from "../Utils/listaProductos.json";
import {children} from "react";


//1. Crear Contexto
const ProductContext = createContext();

//2. Crear Provider
function ProductProvider({children}) {
    const[list, setList] = useState([]); //lista de productos
    const[loading, setLoading] = useState(true); //si esta cargando
    const[selectedProduct, setSelectedProduct] = useState({}); //guarda el prodcuto seleccionado
    const[search, setSearch] = useState(''); //barra de busqeuda
    const[numProductos, setNumProductos] = useState(0);
    useEffect(() => { 
        setTimeout(() => {
            setList(productos);
            setLoading(false);

        },2000);
       
    },[]);

    const anadirCarrito = () => {
        setNumProductos(numProductos + 1); 
    };
    //---------------
    const filteredList = list.filter(producto => 
        producto.product_name.toLowerCase().includes(search.toLowerCase()) 
    );
    //-----------

    const data = {
        list: filteredList,
        //list, 
        loading,
        selectedProduct, 
        setSelectedProduct,
        search,
        setSearch,
        anadirCarrito,
        setNumProductos,
        numProductos
        
        
    }
    return(
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProvider };
