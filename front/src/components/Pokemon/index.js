import {useState, useEffect} from 'react'
import { getPokemon } from '../../services/pokeAPIService'
import './styles.css'

import Card from 'react-bootstrap/Card'
const Pokemon = ({id}) => {
  const [pokemon, setPokemon] = useState(null)

  const getPokemonFromAPI = async () => {
    const req = await getPokemon(id)
    setPokemon(req)
    console.log(id, req)
  }

  useEffect(() => {
    getPokemonFromAPI()
  }, [id])


  return (
      <Card style={{ width: '10vw', height: '34vh' }} className="pokemon-container">
        <Card.Img variant="top" className="sprite" src={pokemon?.sprites?.front_default} />
        <Card.Body>
        <Card.Title>{pokemon?.name}</Card.Title>
          <Card.Text className="pokemon-info">
            <b>Base experience:</b> {pokemon?.base_experience}
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default Pokemon