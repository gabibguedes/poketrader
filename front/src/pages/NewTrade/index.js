import { useState } from "react"
import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import AddPokemon from "../../components/AddPokemon"
import Pokemon from "../../components/Pokemon"
import { getPokemon } from '../../services/pokeAPIService'
import { useHistory } from 'react-router-dom';

import './styles.css'
import { postTrade } from "../../services/tradesAPIService"
import { useTrade } from "../../context"

const FAIR_EXCHANGE_DIFERENCE = 5

const NewTrade = () => {
  const [toGive, setToGive] = useState([])
  const [toReceive, setToReceive] = useState([])

  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertVariant, setVariant] = useState('danger')

  const contex = useTrade()
  const { addToTrades } = contex

  const history = useHistory()

  const getPokemonFromAPI = async (text) => {
    const pokemon = await getPokemon(text.toLowerCase())
    if (!pokemon) {
      setAlertMessage('Pokemon não encontrado!')
      setVariant('danger')
      setShowAlert(true)
      return null
    }
    setShowAlert(false)
    return pokemon
  }

  const addPokemon = async (text, list, setList) => {
    if (list.length < 6) {
      setShowAlert(false)
      const pokemon = await getPokemonFromAPI(text)
      if(pokemon && pokemon.id){
        setList([pokemon, ...list])
      }
    } else {
      setAlertMessage('Limite de pokemons atingido!')
      setVariant('danger')
      setShowAlert(true)
    }
  }

  const removePokemon = (pokemon, list, setList) => {
    const updateList = list.filter((elem) => elem.id !== pokemon.id)
    setList(updateList)
  }

  const sumExp = (arr) => {
    let sum = 0;
    arr.map(pokemon => {
      sum += pokemon.base_experience
    })
    return sum
  }

  const sendTrade = async () => {
    if (toReceive.length === 0 || toGive.length === 0) {
      setAlertMessage('Escolha os pokemons para montar a troca!')
      setVariant('danger')
      setShowAlert(true)
      return
    }
    if (Math.abs(sumExp(toReceive) - sumExp(toGive)) > FAIR_EXCHANGE_DIFERENCE) {
      setAlertMessage('A troca não é justa!')
      setVariant('danger')
      setShowAlert(true)
      return
    }

    const newTrade = await postTrade({
      given: toGive.map((elem) => elem.id),
      received: toReceive.map((elem) => elem.id)
    })

    if(newTrade) {
      setAlertMessage('Troca realizada')
      setVariant('success')
      setShowAlert(true)
      addToTrades(newTrade.trade)
      return history.push('/history');
    }
    setAlertMessage('Ocorreu um erro ao realizar a troca!')
    setVariant('danger')
    setShowAlert(true)
    
  }

  return (
    <Container className="add-trade-container">

      {showAlert &&
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            right: 10,
          }}
        >
          <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
            {alertMessage}
          </Alert>
        </div>
      }
      <h1 className="mb-5">Realizar uma nova troca</h1>
      <h3>Pokemons a serem entregues</h3>
      <AddPokemon
        onAdd={(text) => addPokemon(text, toGive, setToGive)}
      />
      <div className="pokemon-to-add-list">
        {toGive.map((elem, idx) => (
          <Pokemon
            isFromAPI
            elem={elem}
            key={idx}
            removePokemon={() => removePokemon(elem, toGive, setToGive)}/>
        ))}
      </div>
      <p>Total de <i>base experience:</i> <b>{sumExp(toGive)}</b></p>

      <h3>Pokemons a serem recebidos</h3>
      <AddPokemon
        onAdd={(text) => addPokemon(text, toReceive, setToReceive)}
      />
      <div className="pokemon-to-add-list">
        {toReceive.map((elem, idx) => (
          <Pokemon
            isFromAPI
            elem={elem}
            key={idx}
            removePokemon={() => removePokemon(elem, toReceive, setToReceive)} />
        ))}
      </div>
      <p>Total de <i>base experience:</i> <b>{sumExp(toReceive)}</b></p>
      <div className="send-button">
        <Button variant="info" onClick={sendTrade}>Realizar Troca</Button>
      </div>

    </Container>
  )
}

export default NewTrade