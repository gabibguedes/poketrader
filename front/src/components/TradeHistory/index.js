import { useTrade } from '../../context'
import TradeCard from '../TradeCard'
import './styles.css'

const TradeHistory = () => {
  const context = useTrade();
  const { trades } = context
  return (
    <div className="history-container">
      <h2 className="title-history">Histórico</h2>
      <div className="history-cards">
        {trades.map((trade, idx) => <TradeCard trade={trade} key={idx}/>)}
      </div>
    </div>
  )
}

export default TradeHistory