import { useTrade } from '../../context'
import Pokemon from '../Pokemon'
import moment from 'moment'
import 'moment/locale/pt-br'
import './styles.css'

const ShowTrade = () => {
  const context = useTrade()
  const { selectedTrade } = context
  moment.locale("pt-br");

  return (
    <div className="trade-container">
      <div className="trade-show-exchange">
        <div>
          <p className="title-change"><b>Pokemons Entregues</b></p>
          <div className="pokemon-list given">
            {selectedTrade?.given.map((elem, idx) => <Pokemon id={elem} key={idx}/> )}
          </div>
          <p className="exp-info">Total de <i>base experience</i>: <b>{selectedTrade?.expGiven}</b></p>
        </div>
        <p className="x-divisor">X</p>
        <div>
          <p className="title-change"><b>Pokemons Recebidos</b></p>
          <div className="pokemon-list">
            {selectedTrade?.received.map((elem, idx) => <Pokemon id={elem} key={idx} />)}
          </div>
          <p className="exp-info">Total de <i>base experience</i>: <b>{selectedTrade?.expReceived}</b></p>

        </div>
      </div>
      <div className="other-info">
        <p>Troca feita em {moment(selectedTrade?.createdAt).format('LLL')}</p>
      </div>
    </div>
  )
}

export default ShowTrade