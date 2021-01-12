import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '5',
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
  }
  const expense = {
    id: '4',
    description: 'Gum',
    note: 'Test expense',
    amount: '100',
    createdAt: 0,
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expenses[3]])
})

test('should edit expense', () => {
  const amount = '20'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount,
    },
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toBe(amount)
})

test('should Not edit expense if id not found', () => {
  const amount = '20'
  const action = {
    type: 'EDIT_EXPENSE',
    id: 10,
    updates: {
      amount,
    },
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
