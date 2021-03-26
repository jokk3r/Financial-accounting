import React from "react";
import HistoryItem from "./HistoryItem";

function History({ transactions, addDelete }) {
  // console.log(transactions);
  return (
    <section className="transactions">
      <h3 className="transactions__header">Transactions</h3>
      <ul className="transactions__list">
        {transactions.map((el) => (
          <HistoryItem transaction={el} key={el.id} addDelete={addDelete} />
        ))}
      </ul>
    </section>
  );
}

export default History;
