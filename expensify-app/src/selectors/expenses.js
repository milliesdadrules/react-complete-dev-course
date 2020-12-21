// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => { // destructure filters object
    return expenses.filter((expense) => { // return new array of filtered objects
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate  // startDate not a number returns true OR CreatedAt greater than or equal to startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate // endtDate not a number returns true OR CreatedAt less than or equal to endDate
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