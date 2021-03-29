import React from "react";
import deleteB from "../../image/deleteB.png";

function HistoryItem({ transaction, addDelete }) {
  return (
    <li className="transactions__item">
      <p className="transactions__name">{transaction.description}</p>

      <div className="transactions__logic">
        {transaction.add ? (
          <span className=" transactions__item-plus">
            +{transaction.amount}
          </span>
        ) : (
          <span className=" transactions__item-minus">
            -{transaction.amount}
          </span>
        )}
        <button
          className="transactions__delete"
          onClick={() => addDelete(transaction.id)}
        >
          <img src={deleteB} alt="" />
        </button>
      </div>
    </li>
  );
}

export default HistoryItem;
