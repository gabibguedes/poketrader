import {useEffect, useState} from 'react'
import { getTrades } from '../../service/tradesAPIService'
import TradeCard from '../TradeCard'
import './styles.css'

const TradeHistory = () => {
  const [trades, setTrades] = useState([])

  const getTradesHistory = async() => {
    try {
      const history = await getTrades()
      setTrades(history)
    } catch (err) {
      alert('Erro ao buscar historico de trocas.')
    }
  }

  useEffect(() => {
    getTradesHistory()
  }, [])

  return (
    <div>
      <h2 className="title">Historico</h2>
      <div className="history-cards">
        {trades.map((trade, idx) => <TradeCard trade={trade} key={idx}/>)}
      </div>
    </div>
  )
}

export default TradeHistory