import React, { useState } from 'react'
import RadioGroup from '../../../../components/RadioGroup'
import Input from '../../../../components/Input'
import Modal from '../../../../components/Modal'
import { useFilterContext } from '../context'

const FilterModal = (props) => {
    const { transactionType, setTransactionType, category, setCategory } = useFilterContext()

    const [formData, setFormData] = useState({ transactionType: transactionType, category })

    const handleTransactionTypeChange = (event) => {
        setFormData({
            ...formData,
            transactionType: event.target.value
        })
    }

    const handleCategoryChange = (event) => {
        setFormData({
            ...formData,
            category: event.target.value
        })
    }

    const submitFilters = () => {
        setTransactionType(formData.transactionType)
        setCategory(formData.category)
        props.onClose()
    }

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <RadioGroup
                name="transaction-type"
                label="Tipo de transação:"
                inputs={[
                    { value: "income", label: "Entrada" },
                    { value: "expense", label: "Saída" },
                    { value: "all", label: "Todas" }
                ]}
                value={formData.transactionType}
                onChange={handleTransactionTypeChange} />
            <Input type="text" id="category" label="Categoria:"
                onChange={handleCategoryChange} value={formData.category} />
            <button type='button' onClick={submitFilters}>Filtrar</button>
        </Modal>
    )
}

export default FilterModal