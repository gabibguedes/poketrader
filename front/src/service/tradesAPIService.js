import axios from 'axios'

const tradesAPI = axios.create({
  baseURL: `http://localhost:3001`,
});

export const getTrades = async () => {
  const req = await tradesAPI.get('/trades')
  return req.data.trades
}
