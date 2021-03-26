import React from "react";
import Total from "./components/total/Total";
// import "./normalize.css";
import "./style.scss";
import History from "./components/history/History";
import Operation from "./components/operation/Operation";
import Logo from "./image/wallet.png";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: JSON.parse(localStorage.getItem("calcMoney")) || [],
      description: "",
      amount: "",
      income: 0,
      expense: 0,
      balance: 0,
    };
  }
  componentWillMount() {
    this.getBalance();
  }
  componentDidUpdate() {
    this.addStorage();
  }

  getIncome() {
    // const newIncome = this.state.income + this.state.amount;
    // this.setState({
    //   income: newIncome,
    //   balance: this.state.balance + newIncome,
    // });
    return this.state.transactions
      .filter((item) => item.add)
      .reduce((acc, item) => item.amount + acc, 0); // acc iznachalno raven 0 i v nego idet zapic'
  }
  getExpenses() {
    // const newExpence = this.state.expense + this.state.amount;
    // console.log(newExpence);
    // this.setState({
    //   expense: newExpence,
    //   balance: this.state.balance - newExpence,
    // });
    return this.state.transactions
      .filter((item) => !item.add)
      .reduce((acc, item) => item.amount + acc, 0);
  }
  getBalance() {
    const resultIncome = this.getIncome();
    const resultExpense = this.getExpenses();
    const totalBalance = resultIncome - resultExpense;
    this.setState({
      income: resultIncome,
      expense: resultExpense,
      balance: totalBalance,
    });
  }

  addTransaction = (add) => {
    const transactions = [
      ...this.state.transactions,
      {
        id: `cmr${(+new Date()).toString(16)}`,
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        add,
      },
    ];

    // add === true ? this.getIncome() : this.getExpenses();
    this.setState(
      {
        transactions,
        description: "",
        amount: "",
      },
      () => {
        this.getBalance();
      }
    );
  };
  addAmount = (e) => {
    this.setState({ amount: e.target.value });
  };
  addDescription = (e) => {
    this.setState({ description: e.target.value });
  };
  addDelete = (key) => {
    const transactions = this.state.transactions.filter((el) => el.id !== key);

    this.setState({ transactions }, this.getBalance);
  };
  addStorage() {
    localStorage.setItem("calcMoney", JSON.stringify(this.state.transactions));
  }

  render() {
    return (
      <>
        <header>
          <img className="logo__img" src={Logo} alt="" />
          <h2 className="logo__header">Finance</h2>
        </header>
        <main>
          <div className="container">
            <Total
              income={this.state.income}
              expense={this.state.expense}
              balance={this.state.balance}
            />

            <Operation
              addTransaction={this.addTransaction}
              addAmount={this.addAmount}
              addDescription={this.addDescription}
              amount={this.state.amount}
              description={this.state.description}
            />
            <History
              transactions={this.state.transactions}
              addDelete={this.addDelete}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
