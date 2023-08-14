import React from 'react'
import TransactionForm from './pages/TransactionForm'
import ViewTransactions from './pages/ViewTransactions'
import {
  createBrowserRouter,
} from "react-router-dom"

export const routeNames = {
  createTransaction: "/create-transaction",
  viewTransactions: "/transactions"
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewTransactions/>,
  },
  {
    path: routeNames.createTransaction,
    element: <TransactionForm/>,
  },
  {
    path: routeNames.viewTransactions,
    element: <ViewTransactions/>,
  },
])