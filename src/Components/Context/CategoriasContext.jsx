import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'

export const CategoriasContext = createContext()

const CategoriasProvider = (props) =>{

    const [ categorias, setCategorias ] =useState([])

    useEffect(() =>{

        const obtenerCategorias = async () =>{

            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

            const resultado = await Axios.get(url)

            setCategorias(resultado.data.drinks)

        }

        obtenerCategorias()

    }, [])

    return(
        <CategoriasContext.Provider
            value={{
                categorias,
                setCategorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider