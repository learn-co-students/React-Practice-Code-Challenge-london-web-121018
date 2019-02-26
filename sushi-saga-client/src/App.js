import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSushi: [],
      displaySushi: [],
      budget: 1000,
      eatenSushi: [],
      slice: 4,
    }
  }


  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(array => this.setState({ allSushi: array }))
      .then(() => {
        let displaySushiArray = this.state.allSushi.slice(0, 4)
        this.setState({ displaySushi: displaySushiArray })
      })
  }

  // shuffle = (array) => {
  //   let leng = array.length
  //   while (leng > 0) {
  //     let index = Math.floor(Math.random() * leng)
  //     leng--
  //     let temp = array[leng]
  //     array[leng] = array[index]
  //     array[index] = temp
  //   }
  //   return array
  // }

  getDisplaySushi = () => {
    if (this.state.slice < 100) {
      let upperSlice = this.state.slice + 4
      let displaySushiArray = this.state.allSushi.slice(this.state.slice, upperSlice)
      this.state.slice += 4
      this.setState({
        displaySushi: displaySushiArray
      })
    } else {
      this.setState({ slice: 0 })
      let upperSlice = this.state.slice + 4
      let displaySushiArray = this.state.allSushi.slice(this.state.slice, upperSlice)
      this.state.slice += 4
      this.setState({
        displaySushi: displaySushiArray
      })
    }
  }

  removeDisplaySushi = () => {

  }

  eatSushi = sushi => {
    if (this.state.budget >= sushi.price) {
      this.setState({
        budget: this.state.budget - sushi.price,
        eatenSushi: [...this.state.eatenSushi, sushi]
      })
    }

  }


  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.state.allSushi} displaySushi={this.state.displaySushi} eatenSushi={this.state.eatenSushi} eatSushi={this.eatSushi} more={this.getDisplaySushi} />
        <Table budget={this.state.budget} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;