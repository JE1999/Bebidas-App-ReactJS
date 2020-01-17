import React, { useContext, useState } from 'react'

//context
import { CategoriasContext } from './Context/CategoriasContext'
import { RecetasContext } from './Context/RecetasContext'

const Formulario = () =>{

    const [ busqueda, setBusqueda ] = useState({
        nombre : '',
        categoria : ''
    })

    const { categorias } = useContext(CategoriasContext)
    const { setBusquedaRecetas, setConsultas } = useContext(RecetasContext)

    const obtenerDatosRecetas = e =>{
        
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })

    }

    const handleSubmit = e =>{
        e.preventDefault()

        if(busqueda.nombre.trim() === '' || busqueda.categoria.trim() === ''){
            alert("vacio")
            return
        }

        setBusquedaRecetas(busqueda)
        setConsultas(true)
    }


    return(
        <div>
            <h2>Busca bebidas por Categorias o Ingredientes</h2>
            <form
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ingrediente:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputEmail1"
                        placeholder="Buscar por ingrediente"
                        name="nombre"
                        onChange={obtenerDatosRecetas}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Selecciona la Categoria</label>
                    <select 
                        className="form-control" 
                        id="exampleFormControlSelect1" 
                        name="categoria"
                        onChange={obtenerDatosRecetas}
                    >
                        <option value="">Sin seleccionar</option>
                        {categorias.map(categoria =>(
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-success btn-block">Buscar</button>
            </form>
        </div>
    )
}

export default Formulario