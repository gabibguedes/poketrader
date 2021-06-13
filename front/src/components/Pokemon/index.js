import {useState, useEffect} from 'react'
import { getPokemon } from '../../services/pokeAPIService'
import './styles.css'

import Card from 'react-bootstrap/Card'

const Pokemon = ({id}) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const getPokemonFromAPI = async () => {
      const req = await getPokemon(id)
      setPokemon(req)
    }
    getPokemonFromAPI()
  }, [id])


  return (
      <Card style={{ width: '10vw', height: '34vh' }} className="pokemon-container">
        <Card.Img variant="top" className="sprite" src={pokemon?.sprites?.front_default} />
        <Card.Body>
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