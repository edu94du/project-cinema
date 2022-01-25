import './home.css'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

export default function Home() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => { // permite abreviar o endereco da api atraves do comando criado axios //
        async function loadFilmes() {
            const response = await api.get('/r-api/?api=filmes/')
            //    console.log(response.data)
            setFilmes(response.data)
        }

        loadFilmes()

    }, [])

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}