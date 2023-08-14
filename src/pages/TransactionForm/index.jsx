import React, { useState, useEffect } from 'react'
import Input from '../../components/Input'
import RadioGroup from '../../components/RadioGroup'
import './styles.css'
import { getLocalStorageData } from '../../functions/getLocalStorageTransactions'

const TransactionForm = () => {
    const dataKey = 'finances-transactions'

    const [name, setName] = useState('')
    const [transactionType, setTransactionType] = useState('')
    const [category, setCategory] = useState('')
    const [value, setValue] = useState('')

    const [storedTransactions, setStoredTransactions] = useState(null)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleTransactionTypeChange = (event) => {
        setTransactionType(event.target.value)
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handleValueChange = (event) => {
        setValue(event.target.value)
    }

    const submitForm = () => {
        const time = new Date().toLocaleString()

        const transactionEntry = {
            name,
            transactionType,
            category,
            value,
            timestamp: time,
        }


        const updatedTransactions = [...storedTransactions, transactionEntry]
        setStoredTransactions(updatedTransactions)
        localStorage.setItem(dataKey, JSON.stringify(updatedTransactions))
    }

    useEffect(() => {
        const data = getLocalStorageData(dataKey)
        if (data) {
            setStoredTransactions(data)
        }
        else setStoredTransactions([])
    }, [])

    return (
        <>
            <h1>Cadastro de transação</h1>
            <form className='form' onSubmit={submitForm}>
                <Input type="text" id="name" label="Nome:" onChange={handleNameChange} value={name} required />
                <RadioGroup
                    name="transaction-type"
                    label="Tipo de transação:"
                    inputs={[
                        { value: "income", label: "Entrada" },
                        { value: "expense", label: "Saída" }
                    ]}
                    onChange={handleTransactionTypeChange} value={transactionType}
                    required
                />
                <Input type="text" id="category" label="Categoria:" onChange={handleCategoryChange} value={category} required />
                <Input type="number" id="value" label="Valor:" onChange={handleValueChange} value={value} required step="0.01" />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}

export default TransactionForm