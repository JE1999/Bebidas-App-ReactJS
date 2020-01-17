import React from 'react'

//Context
import CategoriasProvider from './Components/Context/CategoriasContext'
import RecetasProvider from './Components/Context/RecetasContext'
import ModalProvider from './Components/Context/ModalContext'

//Componets
import Header from './Components/Layout/Header'
import Formulario from './Components/Formulario'
import ListaRecetas from './Components/ListaRecetas'

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
      
          <Header/>

          <div className="container mt-5">
            <Formulario/>
          </div>
        
          <div className="container">
            <div className="my-5 text-center">
              <div className="row">
                <ListaRecetas/>
              </div>
            </div>
          </div>

        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  )
}

export default App
