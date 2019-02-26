import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      arraySushis: [],
      money: 100,
      plates: [],
    }
  };

  dealSushis = () => {
    const fourSushis = this.state.sushis.splice(0, 4)
    this.setState({arraySushis: fourSushis})
  };

  subtract = (sushi) => {
    const updatedSushi = {...sushi, price: null}
    const sushiIndex = this.state.arraySushis.indexOf(sushi)
    if (this.state.money - sushi.price > 0) {
    this.setState({
      money: this.state.money - sushi.price,
      plates: [...this.state.plates, sushi.id],
      arraySushis: Object.assign([...this.state.arraySushis], {[sushiIndex]: updatedSushi})
    });
  };
  };



  componentDidMount () {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => {
        this.setState({ sushis })
        this.dealSushis()
      })
      
  };

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.arraySushis} subtract={this.subtract} dealSushis={this.dealSushis}/>
        <Table plates={this.state.plates} money={this.state.money}/>
      </div>
    );
  }
}

export default App;