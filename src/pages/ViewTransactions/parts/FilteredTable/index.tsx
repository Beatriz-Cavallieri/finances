import React from 'react'
import Table from '../Table'
import { useFilterContext } from '../context'

const FilteredTable = (props) => {
  const { transactionType, category } = useFilterContext()


  const filteredTransactions = props.transactions.filter(transaction => {
    if (transactionType === "income" && transaction.transactionType !== "income") return false
    if (transactionType === "expense" && transaction.transactionType !== "expense") return false
    if (category.length) {
      if (transaction.category.toLowerCase().includes(category.toLowerCase())) return true
      return false
    }
    return true
  })

  return (
    <>
    {category}
      <div>{props.transactions.length
        ? <Table transactions={filteredTransactions} />
        : <p className='message'>Não há nenhuma transação cadastrada.</p>
      }</div>
    </>
  )
}

export default FilteredTable