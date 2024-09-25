import './App.css'
import Titulo from './Titulo'
import Saludo from './Saludo';  // Importar el componente
import Contador from './components/Contador'
import Texto from './components/Texto'
import Lista from './components/Lista'
import Footer from './components/Footer'
import CardBody from './components/CardBody';
import CardParrafo from './components/CardParrafo';
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
      <CardBody experiences={[
        {
        company: "Dummy Company",
        title: "Dummy Title",
        duration: "Dummy Duration",
        description: "This is a dummy description of the experience."
        },
        {
        company: "Another Dummy Company",
        title: "Another Dummy Title",
        duration: "Another Dummy Duration",
        description: "This is another dummy description of the experience."
        }
      ]} experience={undefined} />

      <CardParrafo title="Sample Title" description="Sample Description"/>

      <Footer 
      title="Footer Title" 
      message="This is a footer message" 
      buttonText="Click Me" 
      onButtonClick={() => alert('Button clicked!')} 
      />

    </>
  )
}

export default App
