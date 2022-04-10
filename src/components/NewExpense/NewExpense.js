import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    handleEditing();
  };

  const handleEditing = () => {
    setIsEditing((isEditing) => {
      return !isEditing;
    });
  };

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={handleEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={handleEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
