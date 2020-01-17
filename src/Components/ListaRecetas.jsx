import React, { useContext } from 'react'

//Context
import { RecetasContext } from './Context/RecetasContext'

//Components
import Receta from './Receta'

const ListaRecetas = () =>{

    const { recetas } = useContext(RecetasContext)

    return(
        <div className="row">
            {recetas.map(receta =>(
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
    )

}

export default ListaRecetas