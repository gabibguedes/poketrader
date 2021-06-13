import moment from 'moment' 
import 'moment/locale/pt-br'  // without this line it didn't work

import './styles.css'

const TradeCard = ({trade}) => {
  moment.locale("pt-br");

  return (
    <div className="trade-card">
      <p><b>Pokemons dados:</b> {trade.given.join(", ")}</p>
      <p><b>Pokemons recebidos:</b> {trade.received.join(", ")}</p>
      <div className="hours">
        {moment(trade.createdAt).fromNow()}
      </div>
    </div>
  )
}

export default TradeCard