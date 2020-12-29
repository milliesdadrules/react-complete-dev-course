import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from '../actions/expenses'
import { connect } from 'react-redux'

const EditExpensePage = ( props )=> {
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.match.params.id, expense))
                    props.history.push('/')
                }}
            />
        </div>
    )
}
const mapStateToProps = (state, props) =>{
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
} 

export default connect(mapStateToProps)(EditExpensePage)