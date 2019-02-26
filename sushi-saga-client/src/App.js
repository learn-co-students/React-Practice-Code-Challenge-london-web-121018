import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './containers/Form';

// Endpoint!
const API = "http://localhost:3000/sushis"
let sushiStart = 0;
let sushiEnd = 4;

class App extends Component {

  state = {
    sushis: ['Sushi is loading...'],
    onBelt: [],
    eatenSushi: [],
    budget: 100
  }

  fetchSushi = () => {
    fetch(API)
      .then(resp => resp.json())
      .then( data => {
        this.setState({
          sushis: data,
          onBelt: data.slice(sushiStart, sushiEnd)
        })
      })
  }

  componentDidMount() {
    this.fetchSushi()
  }

  handleClick = () => {
    sushiStart = sushiStart + 4;
    sushiEnd = sushiEnd + 4;
    console.log(sushiEnd, this.state.sushis.length)
    if(this.state.sushis.length === sushiEnd) {
      sushiStart = 0
      sushiEnd = 4
    } ;
    this.setState({
      onBelt: this.state.sushis.slice(sushiStart, sushiEnd)
    })
  }

  handleBeingEaten = (id) => {
    const sushi = this.state.sushis.find(sushi => sushi.id === id);
    const subBudget = this.state.budget - sushi.price;

    if(!this.state.eatenSushi.includes(id) && subBudget >= 0) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, id],
        budget: subBudget
      })
    }
  }

  eaten = (id) => this.state.eatenSushi.includes(id) ? true : false

  handleFormSubmit = (event) => {
    event.preventDefault();
    const amountAdded = parseInt(event.target.children[0].value);
    this.setState({
      budget: this.state.budget + amountAdded
    })
    event.target.reset();
  }

  render() {
    return (
      <div className="app">
        <Form handleFormSubmit={this.handleFormSubmit} />
        <SushiContainer sushis={this.state.onBelt} handleClick={this.handleClick} handleBeingEaten={this.handleBeingEaten} eaten={this.eaten} />
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;