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

const makeTrade = async (req, res) => {
  const { given, received } = req.body

  if (given.length === 0 || given.length > 6
    || received.length === 0 || received.length > 6) {
    return res.status(400).json({ message: "error", error: "Trade limit is 1 to 6 pokemons given and received" })
  }

  try {
    const expGiven = await sumExp(given)
    const expReceived = await sumExp(received)

    const isFair = Math.abs(expGiven - expReceived) < FAIR_EXCHANGE_DIFERENCE
  
    if (isFair) {
      const trade = await Trade.create({
        given, 
        received,
        expGiven,
        expReceived
      })
      return res.json({ message: "success", isFair, trade })
    }
    return res.status(400).json({ message: "error", error: "Not a fair trade", isFair })
  } catch (err) {
    return res.status(400).json({ message: "error", error: err })
  }
}

const getTrades = async (req, res) => {
  const trades = await Trade.find().sort({ createdAt: 'desc' })
  return res.json({ message: "success", trades })
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