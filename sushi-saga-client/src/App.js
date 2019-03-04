import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

constructor(props){
  super(props)

  this.state = {
  sushis: [],
  isEaten: [],
  budget: 100,
  currentIndex: 0
  };
}

getSushis = () => {
  fetch(API)
  .then(resp => resp.json())
  .then(sushis => this.setState({ sushis }))
}

componentDidMount(){
  this.getSushis();
}

getCurrentSushis = () => {
  const { sushis, currentIndex } = this.state
  return sushis.slice(currentIndex, currentIndex + 4)
}

nextFourSushis = () => {
  const { sushis, currentIndex } = this.state
  const nextIndex = currentIndex + 4 >= sushis.length
  ? 0 : currentIndex + 4

  this.setState({currentIndex: nextIndex})
}

eatSushi = sushi => {
  let {isEaten, budget} = this.state /* I'm using LET so I can reassing the values*/
  if (isEaten.includes(sushi))  return
  if (sushi.price > budget) return

  budget = budget - sushi.price
// the spread operator will create a copy of the existing array isEaten
// and I add the sushi I just ate
  this.setState ({
    isEaten: [ ...isEaten, sushi],
    budget: budget
  })
}

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.getCurrentSushis()}
          nextFourSushis={this.nextFourSushis}
          isEaten={this.state.isEaten}
          eatSushi={this.eatSushi}
          />
        <Table
          budget={this.state.budget}
          isEaten={this.state.isEaten}
          />
      </div>
    );
  }
}

export default App;
