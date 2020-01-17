import React, { useContext, useState } from 'react'
import { ModalContext } from './Context/ModalContext'

import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles';

/* Estilos modal */
function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));
/*******************************/

const Receta = ({receta}) =>{

    /* Obteniendo estilos */
    const [ modalStyle ] = useState(getModalStyle)
    const [ open, setOpen ] = useState(false)

    const clases = useStyles()

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose = () =>{
        setOpen(false)
    }

    /**************************************/

    //Destructuring
    const { strDrink, strDrinkThumb, idDrink } = receta

    //Modal context
    const { setIdReceta, recetaModal, setRecetaModal } = useContext(ModalContext)

    //Formateando ingredientes
    const mostrarIngredientes = recetaModal =>{
        let ingredientes = []

        for(let i = 1; i< 16; i++){
            if( recetaModal[`strIngredient${i}`]){
                ingredientes.push(
                    <li
                        key={i}
                    >
                        { recetaModal[`strIngredient${i}`] } { recetaModal[`strMeasure${i}`] }
                    </li>
                )
            }
        }
        return ingredientes
    }

    return(
        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card m-3 mx-auto" style={{width: '18rem'}}>
                <img src={strDrinkThumb} className="card-img-top" alt={strDrink}/>
                <div className="card-body">
                    <h5 className="card-title">{strDrink}</h5>
                    <button 
                        type="button" 
                        className="btn btn-secondary" 
                        data-toggle="modal" 
                        data-target="#staticBackdrop"
                        onClick={() =>{
                            setIdReceta(idDrink)
                            handleOpen()
                        }}
                    >
                        Ver Receta
                    </button>
                </div>
            </div>

            <Modal
                open={open}
                onClose={() =>{
                    setIdReceta(null)
                    setRecetaModal({})
                    handleClose()
                }}
            >
                <div style={modalStyle} className={clases.paper}>
                    <h2>{recetaModal.strDrink}</h2>
                    <h3>Intrucciones:</h3>
                    <p>{recetaModal.strInstructions}</p>
                    <img className="img-fluid" src={recetaModal.strDrinkThumb} alt={recetaModal.strDrink} />
                    <ul>
                        {mostrarIngredientes(recetaModal)}
                    </ul>
                </div>
            </Modal>

        </div>
    )
}

export default Receta