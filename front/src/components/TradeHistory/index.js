import { useTrade } from '../../context'
import TradeCard from '../TradeCard'
import './styles.css'

const TradeHistory = () => {
  const context = useTrade();
  const { trades } = context

  const noTradesRegistered = () => (
    <div className="no-trade">
      <h2 className="no-trade-text">Não há nenhuma troca registrada!</h2>
      <p className="no-trade-text">
        <a href="/new-trade">Realize uma nova troca </a>
        para iniciar o histórico de trocas!</p>
    </div>
  )

  return (
    <div className="history-container">
      <h2 className="title-history">Histórico</h2>
      <div className="history-cards">
        {trades.length > 0?
          trades.map((trade, idx) => <TradeCard trade={trade} key={idx}/>)
          : noTradesRegistered()
        }
      </div>
    </div>
  )
}

export default TradeHistory