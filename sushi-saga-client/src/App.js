import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
const API = "http://localhost:3000/sushis";

// Clicking a sushi on a plate will eat the sushi, causing it to 
//be removed from its plate and an empty plate to appear on the table.

class App extends Component {

  state = {
  sushis: [],
  eaten: [],
  sushisOnDisplay: [],
  start: 0,
  end: 4,
  wallet: 50,
}


 componentDidMount = () => {
  this.getSushis()
 }

 getSushis = () => {
  fetch(API)
  .then(data => data.json())
  .then(sushis => { 
         this.setState({sushis})
         this.setState({sushisOnDisplay: sushis.slice(this.state.start, this.state.end)})
})
 }

 limitSushisInContainer = () => {
  const start = this.state.start + 4
  const end = this.state.end + 4
  this.setState({start})
  this.setState({end})
  this.setState({sushisOnDisplay: this.state.sushis.slice(start, end)})
}

removeSushi = (event, id) => {

  const index = this.state.eaten.indexOf(id)
  const foundSushi = this.state.sushis.slice().find( sushi => sushi.id === id)
  const wallet = this.state.wallet - foundSushi.price 
  
  switch(this.checkWallet(wallet, index)){
    case "has money":
      const eaten = this.state.eaten.slice()
      eaten.push(id)
      this.setState({eaten})
      this.setState({wallet})
      event.target.style = "display: none"
      break;
    default:      
  }
  
}

checkWallet = (wallet, index) => {
  let decision = ""
   wallet >= 0 && index === -1
   ? decision = "has money"
   : decision = "no money"
   return decision
}

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushisOnDisplay={this.state.sushisOnDisplay}
          limitSushisInContainer={this.limitSushisInContainer}
          removeSushi={this.removeSushi}
        />
        <Table 
        wallet={this.state.wallet}
        eaten ={this.state.eaten}
        />
      </div>
    );
  }
}

export default App;