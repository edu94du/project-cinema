import './filme-info.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { toast } from 'react-toastify'

export default function Filme() {

    const { id } = useParams()
    const history = useNavigate()
    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilme() {

            const response = await api.get(`/r-api/?api=filmes/${id}`)
            //console.log(response.data)

            if (response.data.length === 0) {
                // tentou acessar com id que nao existe e volta para a home //
                history('/')
                return
            }

            setFilme(response.data)
            setLoading(false)
        }

        loadFilme()
        return () => {

        }

    }, [history, id])

    function salvaFilme() {

        const minhaLista = localStorage.getItem('filmes')

        let filmesSalvos = JSON.parse(minhaLista) || [] // converte os dados do localstorage para um JSON //

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if (hasFilme) {
            toast.warning('voce ja possui esse filme salvo')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('salvo com sucesso')
    }

    if (loading) {
        return (
            <div className="filme-info">
                <span>Carregando...</span>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <h3>Sinopse do filme</h3>
            {filme.sinopse}

            <div className="botoes">
                <button onClick={salvaFilme}>Salvar</button>
                <button><a targert="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}> Assistir Trailer</a></button>
            </div>
        </div>
    )
}