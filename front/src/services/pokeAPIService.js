import axios from 'axios'

const pokeAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemon = async (id) => {
  try {
    const pokemon = await pokeAPI.get(`/pokemon/${id}`)
    return pokemon.data
  } catch {
    return null
  }
}
