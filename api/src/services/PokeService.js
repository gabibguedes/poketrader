const axios = require('axios');

const PokeAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

const getPokemon = async (id) => {
  try {
    const pokemon = await PokeAPI.get(`/pokemon/${id}`)
    return pokemon.data
  } catch (err) {
    throw `Failed on getting pokemon ${id}`
  }
}

module.exports = {
  getPokemon
}