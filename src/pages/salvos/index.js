import './salvos.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Salvos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes')
        setFilmes(JSON.parse(minhaLista) || []) // transfoma o dados do local storage em array para utilizar o MAP //
    }, [])

    function deleteFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })
        setFilmes(filtroFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
        toast.success('Deletado com sucesso')
    }

    return (
        <div id="meus-filmes">
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você nao possui nenhum filme salvo 🙁 </span>}

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.nome}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Detalhes</Link>
                                <button onClick={() => deleteFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}