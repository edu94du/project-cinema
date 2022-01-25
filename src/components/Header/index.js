import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link className="logo" to="/">Projeto Filmes</Link>
            <Link className="favoritos" to="/salvos">Salvos</Link>
        </header>
    )
}