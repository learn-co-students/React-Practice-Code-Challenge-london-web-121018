import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    sushis: [],
    currentSushi: 0,
    money: 100,
    eatenSushi: [],
  };
}

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(sushis => this.setState({ sushis: sushis }));
  }

   handleSushiClick = (sushi) => {
     const eatenSushi = this.state.eatenSushi
     const money = this.state.money

       if (sushi.price > money){
         alert('You have run out of money')
       } else {
        this.setState(prevState => ({
          eatenSushi: [...prevState.eatenSushi, sushi],
          money: money-sushi.price
        }))
      }
   }

  isSushiEaten = (sushi) => {
    if (this.state.eatenSushi.includes(sushi)) return true;
    return false;
  }

  getFourSushis = () => {
    this.setState({
      currentSushi: (this.state.currentSushi + 4) % 100
    })
  }

  render() {
    const { sushis, currentSushi, eatenSushi } = this.state
    return (
      <div className="app">
        <SushiContainer
          sushis={sushis.slice(currentSushi, currentSushi + 4)}
          getFourSushis={this.getFourSushis}
          handleSushiClick={this.handleSushiClick}
          isSushiEaten={this.isSushiEaten}
        />
        <Table
          eatenSushi={eatenSushi}
          money={this.state.money}
        />
      </div>
    );
  }
}

export default App;
