import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './style/main.scss'

const store = configureStore()

const unsubscribe = store.subscribe(() => {
    const state = store.getState() // Get current state
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters) // Create call to function with 2 params expenses array and filters object
    console.log(visibleExpenses);
})

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500}))
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000}))
store.dispatch(addExpense({ description: 'Rent', amount: 110950}))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

)

ReactDOM.render(jsx, document.getElementById('app'))