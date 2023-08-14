import React, { createContext, useContext, useState } from 'react'

const FilterContext = createContext()

export function useFilterContext() {
  return useContext(FilterContext)
}

export function FilterProvider({ children }) {
  const [transactionType, setTransactionType] = useState('all')
  const [category, setCategory] = useState('')

  return (
    <FilterContext.Provider value={{
      transactionType,
      setTransactionType,
      category,
      setCategory,
    }}>
      {children}
    </FilterContext.Provider>
  )
}