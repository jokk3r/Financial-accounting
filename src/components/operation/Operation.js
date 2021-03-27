import React from "react";
import plus from "../../image/plus.png";
import minus from "../../image/minus.png";

class Operation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classNameForm: "operation__form__hide",
      arrow: plus,
    };
  }
  classNameFormChange() {
    let classNameForm = this.state.classNameForm;

    if (classNameForm === "operation__form__hide") {
      let changeClass = classNameForm.slice(0, -6);

      this.setState({
        classNameForm: changeClass,
        arrow: minus,
      });
    } else {
      let hide = "__hide";
      let changeClass = classNameForm.concat(hide);
      this.setState({
        classNameForm: changeClass,
        arrow: plus,
      });
    }
  }
  render() {
    return (
      <section className="operation">
        <div
          className="operation__main"
          onClick={() => this.classNameFormChange()}
        >
          <h3 className="operation__header">New Operation</h3>
          <img className="operation__plus" src={this.state.arrow} alt="" />
        </div>
        <div className={this.state.classNameForm}>
          <form id="form">
            <label>
              <input
                type="text"
                className="operation__fields operation__name"
                placeholder="Description"
                onChange={this.props.addDescription}
                value={this.props.description}
              ></input>
            </label>
            <label>
              <input
                type="number"
                className="operation__fields operation__amount"
                placeholder="Enter sum"
                onChange={this.props.addAmount}
                value={this.props.amount}
              ></input>
            </label>
            <div className="operation__btns">
              <button
                type="button"
                className="operation__btn operation__btn-subtract"
                onClick={() => this.props.addTransaction(false)}
              >
                Сosts
              </button>
              <button
                type="button"
                className="operation__btn operation__btn-add"
                onClick={() => this.props.addTransaction(true)}
              >
                Income
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Operation;
