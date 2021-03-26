import React from "react";
import plus from "../../image/plus.png";
import minus from "../../image/minus.png";

function Operation({
  addTransaction,
  addDescription,
  addAmount,
  description,
  amount,
}) {
  return (
    <section className="operation">
      <div className="operation__main">
        <h3 className="operation__header">New Operation</h3>
        <img className="operation__plus" src={plus} alt="" />
      </div>
      <div className="operation__form">
        <form id="form">
          <label>
            <input
              type="text"
              className="operation__fields operation__name"
              placeholder="Description"
              onChange={addDescription}
              value={description}
            ></input>
          </label>
          <label>
            <input
              type="number"
              className="operation__fields operation__amount"
              placeholder="Enter sum"
              onChange={addAmount}
              value={amount}
            ></input>
          </label>
          <div className="operation__btns">
            <button
              type="button"
              className="operation__btn operation__btn-subtract"
              onClick={() => addTransaction(false)}
            >
              Сosts
            </button>
            <button
              type="button"
              className="operation__btn operation__btn-add"
              onClick={() => addTransaction(true)}
            >
              Income
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Operation;
