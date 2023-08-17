import { Inicio } from './components/Inicio';
import { Navbar } from './components/Navbar';
import './global.css';
import { Projetos } from './components/Projetos';
import { Contato } from './components/Contato';



export function App() {
  return (
    <div>
        <Navbar />        
      <div >
        <Inicio />
        <Projetos />
        <Contato />
      </div>
      
    </div>
    
  )
}


