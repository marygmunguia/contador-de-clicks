import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [ numeroDeClics, setNumeroDeClics] = useState(0);

  const manejarClic = () => {
    setNumeroDeClics(numeroDeClics + 1);
  }

  const reiniciarContador = () => {
    setNumeroDeClics(0);
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='container-fluid p-5'>
          <Contador numeroDeClics={numeroDeClics}/>
            <div className='d-grid gap-2 col-6 mx-auto'>
              <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic} />
              <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
