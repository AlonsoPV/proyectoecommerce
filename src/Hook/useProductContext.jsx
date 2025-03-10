//* 3) Crear un hook para usar o consummir el contexto de la lista de canciones.

import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";

// hacer el export de una función

export const useProductContext = () => {
    // guardo mi contexto en una constante
    const context = useContext(ProductContext) // quiero usar mi contexto y esto lo guardo en context

    // si no hay contexto, si es un undefined (vacío), lanzo un error
    if(!context){
        throw new Error('useProductContext  debe ser usado dentro de ProductProvider')
    }
    return context
} 