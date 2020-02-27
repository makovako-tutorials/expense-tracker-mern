import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
//   const totalPlus = amounts.reduce((acc, item) => (acc += item > 0 ? item : 0),0);
//   const totalMinus = amounts.reduce((acc, item) => (acc += item < 0 ? item : 0),0);
  const totalPlus = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2);
  const totalMinus = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${totalPlus}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(totalMinus)}</p>
      </div>
    </div>
  );
};
