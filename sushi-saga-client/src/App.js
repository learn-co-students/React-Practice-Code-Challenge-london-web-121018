import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state ={ 
    sushiList: [],
    firstRendered: 0,
    eaten:[],
    budget: 150,
    money: 0
  }

  incrementSushiFour = () => {
    const num = this.state.firstRendered
    const incremented = num+4
    console.log(this.state.firstRendered )
    console.log(this.state.sushiList.length -8)
    if (this.state.firstRendered  === this.state.sushiList.length -8 ){
      console.log('hi')
      this.setState({
        firstRendered: 4
      })
    } else {
      this.setState({
        firstRendered: incremented
      })
    }
 
  }
  sushiEaten = (sushi) => {
    const eaten = this.state.eaten
    const budget = this.state.budget
    if (sushi.price > budget){
      alert('You have run out of money')
    } else {
    this.setState({
      eaten: [...eaten, sushi],
      budget: (budget-sushi.price)
    })
  }
  }

  addMoney = (e) => {
    e.preventDefault()

    const budget  = parseInt(this.state.budget)
    const money = parseInt(this.state.money)
   this.setState({
     budget: (budget+money)
   })
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => {this.setState({
      sushiList: data
    })
  })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiEaten={this.sushiEaten} moreSushi={this.incrementSushiFour} firstRendered={this.state.firstRendered} sushiList={this.state.sushiList} eaten={this.state.eaten} />
        <Table budget={this.state.budget} eaten={this.state.eaten}/>
        <form onSubmit={e => this.addMoney(e)}>
        <label>
        Add More $$
        <input type="text" name="money" onChange={e =>this.setState({money: e.target.value})}/>
        </label>
        <input type="submit" value="SHOW ME THE MONEY!"  />
      </form>
      </div>
    );
  }
}

export default App;