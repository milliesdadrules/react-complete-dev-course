const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
               action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => action.id !== id)
        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                if(expense.id === action.id){
                    return {
                        ...expense, // speards current expense object
                        ...action.updates // speards update object which will override expense properties submitted
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}
 