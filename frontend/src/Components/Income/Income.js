import React, { useState } from 'react';
import '../../styles/IncomeForm.css';

const IncomeForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [reference, setReference] = useState('');

  const handleAddIncome = () => {
    // Logika untuk menambah income
    console.log("Income added:", { title, amount, date, category, reference });
  };

  return (
    <div className="income-card">
      <h2>Incomes</h2>
      <div className="income-total">Total Income: <span>$0</span></div>
      <input
        type="text"
        placeholder="Salary Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Salary Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        placeholder="Enter A Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Option</option>
        <option value="salary">Salary</option>
        <option value="bonus">Bonus</option>
        <option value="freelance">Freelance</option>
      </select>
      <textarea
        placeholder="Add A Reference"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
      />
      <button className="add-income-button" onClick={handleAddIncome}>+ Add Income</button>
    </div>
  );
};

export default IncomeForm;
