import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { routeNames } from '../../routes'

const Header = () => {
  return (
    <header>
      <p className='headerTitle'>Finanças</p>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href={routeNames.viewTransactions}>Tabela de Transações</a></li>
          <li><a href={routeNames.createTransaction}>Criar Transação</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header