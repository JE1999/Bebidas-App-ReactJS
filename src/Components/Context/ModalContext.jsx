import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) =>{


    const [ idReceta, setIdReceta ] = useState(null)
    const [ recetaModal, setRecetaModal ] = useState({})
    
    useEffect(() =>{

        if(!idReceta) return

        const obtenerReceta = async () =>{

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`

            const resultado = await Axios.get(url)

            setRecetaModal(resultado.data.drinks[0])
        }

        obtenerReceta()

    }, [idReceta])

    return(
        <ModalContext.Provider
            value={{
                setIdReceta,
                recetaModal,
                setRecetaModal
            }}
        >

            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider