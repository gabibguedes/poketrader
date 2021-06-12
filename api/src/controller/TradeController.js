const Trade = require('../model/TradeSchema')
const { getPokemon } = require('../services/PokeService')

const FAIR_EXCHANGE_DIFERENCE = 5

const sumExp = async (pokemons) => {
  let totalBaseExp = 0

  await Promise.all(pokemons.map(async pokemonId => {
    pokemon = await getPokemon(pokemonId)
    totalBaseExp += pokemon.base_experience
  }))

  return totalBaseExp
}

const evaluateMatch = async (given, received) => {
  let expGiven = await sumExp(given)
  let expReceived = await sumExp(received)

  return Math.abs(expGiven - expReceived) < FAIR_EXCHANGE_DIFERENCE
}

const makeTrade = async (req, res) => {
  const { given, received } = req.body

  try {
    const isFair = await evaluateMatch(given, received)
  
    if (isFair) {
      const trade = await Trade.create({
        given, 
        received
      })
      return res.json({ message: "success", isFair, trade })
    }
    return res.status(400).json({ message: "error", error: "Not a fair trade", isFair })
  } catch (err) {
    return res.status(400).json({ message: "error", error: err })
  }
}

const getTrades = async (req, res) => {
  const trades = await Trade.find()
  return res.json(trades)
}

const getTradeByID = async (req, res) => {
  const { id } = req.params
  try {
    const trade = await Trade.findOne({ _id: id });
    return res.json({ message: "success", trade})
  } catch {
    return res.status(400).json({ message: "error", error: "Trade not found" })
  }
}

module.exports = {
  makeTrade,
  getTrades,
  getTradeByID
}