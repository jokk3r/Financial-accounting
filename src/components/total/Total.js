import React from "react";

function Total({ income, expense, balance }) {
  return (
    <section className="total">
      <header className="total__header">
        <h3 className="total__h3">Balance</h3>
        <p className="total__balance">{balance} $</p>
      </header>
      <div className="total__main">
        <div className="total__main-item ">
          <h4 className="total__h4">Income</h4>
          <p className="total__money total__money-income">{income} $</p>
        </div>
        <div className="total__main-item ">
          <h4 className="total__h4">Costs</h4>
          <p className="total__money total__money-expenses">-{expense} $</p>
        </div>
      </div>
    </section>
  );
}

export default Total;
