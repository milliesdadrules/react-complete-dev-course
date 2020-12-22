import React, { useState } from "react";
import ReactDOM from "react-dom";
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

store.dispatch(addExpense({ description: 'Water Bill', amount: 1000, createdAt: 100}))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2000, createdAt: 102}))
store.dispatch(setTextFilter('bill'))
store.dispatch(setTextFilter('water'))

ReactDOM.render(<AppRouter />, document.getElementById('app'))