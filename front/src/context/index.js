import React, { createContext, useContext, useEffect, useState } from 'react'
import { getTrades } from '../services/tradesAPIService'

const TradeContext = createContext()

const TradeProvider = ({ children }) => {
  const [trades, setTrades] = useState([])
  const [selectedTrade, setSelectedTrade] = useState(null)

  const getTradesHistory = async () => {
    const history = await getTrades()
    setTrades(history)
    setSelectedTrade(history[0])
  }

  useEffect(() => {
    getTradesHistory()
  }, [])

  const addToTrades = (newTrade) => {
    setTrades([newTrade, ...trades])
    setSelectedTrade(newTrade)
  }


  return (
    <TradeContext.Provider value={{
      trades,
      addToTrades,
      getTradesHistory,
      selectedTrade, 
      setSelectedTrade
    }}>
      {children}
    </TradeContext.Provider>
  )
};

export default TradeProvider;

export function useTrade() {
  const context = useContext(TradeContext);
  return { ...context }
}