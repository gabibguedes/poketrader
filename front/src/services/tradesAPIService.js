import axios from 'axios'

const { REACT_APP_API_URL } = process.env

const tradesAPI = axios.create({
  baseURL: REACT_APP_API_URL,
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

export const postTrade = async (trade) => {
  try {
    const req = await tradesAPI.post('/trades', trade)
    return req.data
  } catch {
    return null
  }
}
