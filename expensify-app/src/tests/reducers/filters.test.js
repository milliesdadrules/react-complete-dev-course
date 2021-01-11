import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('should setup default filter values', () => {
  const state = filterReducer(undefined, '@@INIT')
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
})
