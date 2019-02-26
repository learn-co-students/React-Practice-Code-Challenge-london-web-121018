import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    displaySushi:[],
    eatenSushi: [],
    displayCount: 4,
    cash: 100
  }
  getDisplaySushi = (displaySushi) => {
    if (this.state.displayCount === 100) {
      this.state.displayCount = 0
    }
    this.setState({
      displaySushi: this.state.sushi.slice(this.state.displayCount, this.state.displayCount+4),
      displayCount: this.state.displayCount+4
    })
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => this.setState({sushi}))
    .then(() => {
      this.setState({displaySushi: this.state.sushi.slice(0,4)})
    })
  }

  sushiEaten = (given) => {
    const condition = this.state.eatenSushi.find(sushi => sushi.id === given)
    return !!condition
  }

  eatSushi = (id) => {
    const condition = this.state.sushi.find(sushi => sushi.id === id)
    if (this.state.cash >= condition.price) {
      this.state.eatenSushi.push(condition)
      this.setState({
        eatenSushi: this.state.eatenSushi,
        cash: this.state.cash - condition.price
      })
    }
 }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushi={this.state.sushi} 
        displaySushi={this.state.displaySushi} 
        setDisplaySushi={this.getDisplaySushi}
        eatSushi={this.eatSushi}
        sushiEaten={this.sushiEaten}
        />
        <Table 
        cash={this.state.cash}
        eatenSushi={this.state.eatenSushi}
        />
      </div>
    );
  }
}

export default App;