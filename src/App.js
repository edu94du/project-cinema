import './styles.css'
import Rotas from './routes'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <div className="app">

      <Rotas />
      <ToastContainer atutoclose={1500} />
    </div>
  );
}

export default App;