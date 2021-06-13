import axios from 'axios'

const tradesAPI = axios.create({
  baseURL: `http://localhost:3001`,
});

export const getTrades = async () => {
  try {
    const req = await tradesAPI.get('/trades')
    return req.data.trades
  } catch {
    alert('Ocorreu um erro ao buscar hitórico de trocas.')
    return []
  }
}
