import React, { useState } from 'react'
import RadioGroup from '../../../../components/RadioGroup'
import Input from '../../../../components/Input'
import Modal from '../../../../components/Modal'
import { useFilterContext } from '../context'
import './styles.css'

const FilterModal = (props) => {
    const { transactionType, setTransactionType, category, setCategory } = useFilterContext()

    const [formTransactionType, setFormTransactionType] = useState(transactionType)
    const [formCategoryType, setFormCategoryType] = useState(category)


    const handleTransactionTypeChange = (event) => {
        setFormTransactionType(event.target.value)
    }

    const handleCategoryChange = (event) => {
        setFormCategoryType(event.target.value)
    }

    const submitFilters = () => {
        setTransactionType(formTransactionType)
        setCategory(formCategoryType)
        props.onClose()
    }

    const clearFilters = () => {
        setFormCategoryType('')
        setFormTransactionType('all')
    }

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <div className='filterModalContent'>
                <h2>Filtrar transações</h2>
                <RadioGroup
                    name="transaction-type"
                    label="Tipo de transação:"
                    inputs={[
                        { value: "income", label: "Entrada" },
                        { value: "expense", label: "Saída" },
                        { value: "all", label: "Todas" }
                    ]}
                    value={formTransactionType}
                    onChange={handleTransactionTypeChange} />
                <Input type="text" id="category" label="Categoria:"
                    onChange={handleCategoryChange} value={formCategoryType} />
            </div>
            <div className='filterModalFooter'>
                <button type='button' onClick={clearFilters}>Limpar filtros</button>
                <button type='button' onClick={submitFilters} className='filterButton'  >Filtrar</button>
            </div>
        </Modal>
    )
}

export default FilterModal