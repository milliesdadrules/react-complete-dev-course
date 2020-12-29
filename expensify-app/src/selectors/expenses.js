import moment from 'moment'
// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => { // destructure filters object
    return expenses.filter((expense) => { // return new array of filtered objects
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true
        const endDateMatch =  endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}