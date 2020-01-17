import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'

export const RecetasContext = createContext()

const RecetasProvider = (props) =>{

    //Aqui esta el resultado de la busqueda
    const [ recetas, setRecetas ] = useState([])

    const [ busquedaRecetas, setBusquedaRecetas ] = useState({
        nombre: '',
        categoria: ''
    })

    const { nombre, categoria } = busquedaRecetas

    //Para que no haga peticiones sin datos
    const [ consulta, setConsultas] = useState(false)

    useEffect(() =>{

        if(consulta){

            const buscarRecetas = async () =>{

                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`

                const resultado = await Axios.get(url)

                setRecetas(resultado.data.drinks)
            }

            buscarRecetas()
        }

    }, [nombre, categoria, consulta])

    return(
        <RecetasContext.Provider
            value={{
                setBusquedaRecetas,
                recetas,
                setConsultas
            }}
        >

            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider