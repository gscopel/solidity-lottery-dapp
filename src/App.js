import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { manager: '' };
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();

    this.setState({ manager });
  }

  render() {
    //web3.eth.getAccounts().then(console.log);
    return (
      <div>
        <h2>Lottery Dapp</h2>
        <p>This contract has been deployed by {this.state.manager}
              and is managed by {this.state.manager}</p>
      </div>
    );
  }
}

export default App;
