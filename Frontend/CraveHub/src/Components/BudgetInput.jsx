import { useState } from 'react';
import "./BudgetInput.css"
export default function Searchbar() {
  const [budget, setBudget] = useState('');

  // Handle numeric input only
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // Regular expression to allow only digits
      setBudget(value);
    }
  };

  return (
    <div className="budget-input-container">
      <label htmlFor="budget" className="budget-label">
        Enter Your Budget (PKR)
      </label>
      <input
        id="budget"
        type="text"
        onChange={handleInputChange}
        value={budget}
        // onChange={(e)=>setBudget(e.target.value)}
        placeholder="e.g., 1500"
        className="budget-input"
        maxLength="6"
      />
    </div>
  );
}
