import moment from 'moment' 
import 'moment/locale/pt-br'
import { useTrade } from '../../context'

import Card from 'react-bootstrap/Card'

import './styles.css'

const TradeCard = ({trade}) => {
  const context = useTrade()
  const { selectedTrade, setSelectedTrade } = context

  moment.locale("pt-br");

  return (
    <Card
      className="text-center trade-card"
      border={selectedTrade?._id === trade?._id ? 'primary' : null}
      onClick={() => { setSelectedTrade(trade) }}
    >
      <Card.Body>
        <Card.Text>
          <b>Pokemons entregues:</b> {trade.given.join(", ")}
        </Card.Text>
        <Card.Text>
          <b>Pokemons recebidos:</b> {trade.received.join(", ")}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{moment(trade.createdAt).fromNow()}</Card.Footer>
    </Card>
  )
}

export default TradeCard