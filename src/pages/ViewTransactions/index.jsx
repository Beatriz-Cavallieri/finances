import React, { useState, useEffect } from 'react'
import { getLocalStorageData } from '../../functions/getLocalStorageTransactions'
import Table from './parts/Table'
import './styles.css'
import Modal from '../../components/Modal'
import { FilterProvider } from './parts/context'
import FilterModal from './parts/FilterModal'
import FilteredTable from './parts/FilteredTable'

const ViewTransactions = () => {
    const [storedTransactions, setStoredTransactions] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    useEffect(() => {
        const data = getLocalStorageData('finances-transactions')
        if (data) {
            setStoredTransactions(data)
        }
    }, [])
    return (
        <FilterProvider>
            <FilterModal isOpen={isModalOpen} onClose={closeModal} />
            <h1>Transações cadastradas</h1>
            <div className='filterButtonContainer'>
                <button type='button' onClick={openModal} >Filtrar transações</button>
            </div>
            <FilteredTable transactions={storedTransactions} />
        </FilterProvider>
    )
}


export default ViewTransactions