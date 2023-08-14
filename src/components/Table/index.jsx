import React from 'react'
import './styles.css'
import { formatCurrency } from '../../functions/formatCurrency'

const Table = (props) => {
    const summary = props.transactions.reduce((total, transaction) => {
        if (transaction.transactionType === 'income') return total + transaction.value
        if (transaction.transactionType === 'expense') return total - transaction.value
        return total
    }, 0)

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo de transação</th>
                    <th>Categoria</th>
                    <th>Valor</th>
                    <th>Hora do cadastro</th>
                </tr>
            </thead>
            <tbody>
                {props.transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.name}</td>
                        <td>{transaction.transactionType}</td>
                        <td>{transaction.category}</td>
                        <td className={transaction.transactionType}>{formatCurrency(transaction.value)}</td>
                        <td>{transaction.timestamp}</td>
                    </tr>
                ))}
                <tr className="summaryRow">
                    <td colSpan="3">Total:</td>
                    <td>{formatCurrency(summary)}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table