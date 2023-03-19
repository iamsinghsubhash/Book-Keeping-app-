import React,{ useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) =>{
const [enterdTitle, setEnterdTitle] = useState(' ');
const [enterdAmount, setEnterdAmount] = useState(' ');
const [enterdDate, setEnterdDate] = useState(' ');

const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData ={
        title:enterdTitle,
        amount:enterdAmount,
        date:new Date(enterdDate)
    }
    props.onSaveExpenseData(expenseData);
    console.log(expenseData);

    setEnterdTitle('');
    setEnterdAmount('');
    setEnterdDate('');
};

    const titleChangHandler = (event) =>{
        setEnterdTitle(event.target.value);
    };
    const amountChangHandler = (event) =>{
        setEnterdAmount(event.target.value);
    };
    
    const dateChangHandler = (event) =>{
        setEnterdDate(event.target.value);
    };
   return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input tytpe="text" value={enterdTitle} onChange={titleChangHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input tytpe="number" value={enterdAmount} min="0.01" step="0.01" onChange={amountChangHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enterdDate} onChange={dateChangHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
   );
}
export default ExpenseForm;