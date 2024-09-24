import './App.css'
import Titulo from './Titulo'
import Saludo from './Saludo';  // Importar el componente
import Contador from './components/Contador'
import Texto from './components/Texto'
import Lista from './components/Lista'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <div className="container">
      <h1 className="text-center my-4">¡Hola, React con Vite y Bootstrap!</h1>
      <p>Este es mi primer proyecto de prueba en React con Vite y Bootstrap.</p>
      <button className="btn btn-primary">Haz clic aquí</button>
    </div>

      <div>
       <Titulo titulo='Mi titulo de prueba'/>
      </div>
      
      <div>
        <Saludo />  {/* Usar el componente Saludo */}
      </div>

      <div>
        <Contador/>
      </div>

      <div>
        <Texto/>
      </div>

      <div><Lista></Lista></div>

      <Footer />

    </>
  )
}

export default App
