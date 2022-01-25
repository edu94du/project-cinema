import axios from 'axios'

// api do projeto // https://sujeitoprogramador.com/r-api/?api=filmes/

const api = axios.create({
    baseURL:'https://sujeitoprogramador.com'
})

export default api