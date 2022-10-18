import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ComponenteAxios from "./Componentes/ComponenteAxios/ComponenteAxios";



/* 
Inicializar proyecto: npm start
Detener proyecto: Ctrl +C
*/

class App extends React.Component {
  render(){
    return(
      <div className= "container justify-content-center align-items-center">
        <ComponenteAxios/>
      </div>
    );

  }

}

export default App;
