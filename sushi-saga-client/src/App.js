import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushi: [],
    selectedSushi: [],
    money: 100,
    tableSushi: []
  };

  startIndex = 0;
  sushiIndex = 4;

  sushiSelector = () => {
    return this.state.sushi.slice(this.startIndex, this.sushiIndex);
  };

  refreshSushi = () => {
    this.startIndex =
      this.sushiIndex < this.state.sushi.length ? this.sushiIndex : 0;
    this.sushiIndex =
      this.sushiIndex < this.state.sushi.length ? this.sushiIndex + 4 : 4;
    console.log(this.startIndex);
    console.log(this.sushiIndex);
    this.setState({
      selectedSushi: this.sushiSelector()
    });
  };

  eatSushi = eatenSushi => {
    if (this.state.money - eatenSushi.price >= 0) {
      eatenSushi.eaten = true;
      console.log(eatenSushi);
      let tempSushi = this.state.selectedSushi.filter(
        sushi => sushi !== eatenSushi
      );
      let mainSushi = this.state.sushi.filter(sushi => sushi !== eatenSushi);
      this.state.tableSushi.push(eatenSushi);
      tempSushi.push(eatenSushi);
      this.setState({
        sushi: mainSushi,
        tableSushi: this.state.tableSushi,
        selectedSushi: tempSushi,
        money: this.state.money - eatenSushi.price
      });
    } else {
      alert("Not Enough Money! Wah!");
    }
  };

  componentDidMount() {
    fetch(API)
      .then(resp => {
        return resp.json();
      })
      .then(sushis => this.setState({ sushi: sushis }))
      .then(() => {
        this.setState({ selectedSushi: this.sushiSelector() });
      });
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.selectedSushi}
          moreSushi={this.refreshSushi}
          eatSushi={this.eatSushi}
        />
        <Table tableSushi={this.state.tableSushi} money={this.state.money} />
      </div>
    );
  }
}

export default App;
