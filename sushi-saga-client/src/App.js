import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import './App.css'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()

    this.state = {
      sushis: [],
      currentSushi: 0,
      budget: 100,
      eatenSushi: [],
    }
  }

  moreSushi = (event) => {
    this.setState(prevState => ({
      currentSushi: parseInt(prevState.currentSushi) + 1,
    }))
  }

  spendMoney = (price) => {
    // let selectedSushi = event.target;
    // console.log(selectedSushi)
    this.setState(prevState => ({
      budget: parseInt(prevState.budget) - price,
    }))
  }

  eatSushi = (event) => {
    this.setState(prevState => ({
      eatenSushi: [...prevState.eatenSushi, "plate"]
    }))
  }

  render() {
    const { sushis, currentSushi, budget, eatenSushi, expenditure } = this.state
    return (
      <div className="app">

        <SushiContainer
        sushis={sushis.slice(currentSushi, currentSushi + 4)}
        moreSushi={this.moreSushi}
        budget={budget}
        spendMoney={this.spendMoney}
        eatSushi={this.eatSushi}
        eatenSushi={this.eatenSushi}
        />
        <Table
        sushis={sushis}
        budget={budget}
        eatenSushi={eatenSushi}
        />
      </div>
    );
  }

  fetchSushi() {
      fetch(API)
        .then(resp => resp.json())
        // .then(resp => console.log(resp))
        .then((sushis) => {
          this.setState({ sushis: sushis })
        })
  }

  componentDidMount() {
    this.fetchSushi()
  }
}

export default App;
