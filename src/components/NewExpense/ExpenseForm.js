import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState('');
  const [enteredAmount, setAmount] = useState('');
  const [enteredDate, setDate] = useState('');

  // // 2nd Method to handle only one state
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);

    // //Using anonymous function so it will always give latest previous state and we don't need to depend on old state as we are using spread operator
    // setUserInput((prevStateSnapshot) => {
    //   return { ...prevStateSnapshot, enteredTitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangehandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            required
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            required
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            required
            onChange={dateChangehandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
