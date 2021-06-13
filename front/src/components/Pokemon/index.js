import {useState, useEffect} from 'react'
import { getPokemon } from '../../services/pokeAPIService'
import './styles.css'

import Card from 'react-bootstrap/Card'

const Pokemon = ({ elem, isFromAPI, removePokemon}) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const getPokemonFromAPI = async () => {
      const req = await getPokemon(elem)
      setPokemon(req)
    }
    if (!isFromAPI){
      getPokemonFromAPI()
    } else {
      setPokemon(elem)
    }
  }, [elem])


  return (
    <Card style={{ width: '10vw', height: '34vh' }} className="pokemon-container">
      {removePokemon && 
        <button type="button" className="close remove-button" aria-label="Close" onClick={removePokemon}>
          <span aria-hidden="true">&times;</span>
        </button>
      }
      <Card.Img variant="top" className="sprite" src={pokemon?.sprites?.front_default} />
      <Card.Body className="card-body">
      <Card.Title>{pokemon?.name}</Card.Title>
        <Card.Text className="pokemon-info">
        <b>ID:</b> {pokemon?.id}<br />
        <b>Base exp:</b> {pokemon?.base_experience}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Pokemon