import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../src/components/Header'
import Home from './pages/Home'
import Filme from './pages/filme'
import Salvos from './pages/salvos'
import NotFound from './pages/404'


const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/filme/:id" element={<Filme />}></Route>
                <Route exact path="/salvos" element={<Salvos />}></Route>
                <Route exact path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas