import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"



class App extends Component {

  constructor(){
    super();
    this.state={
      plates:[],
      money: 100,
      firstSushi: 0,
      lastSushi: 4,
      sushi:[]
    }
  }

  componentWillMount(){
    fetch(API).then(resp => resp.json())
    .then(food => this.setState({sushi: food}))
  }


  handleOnlyFourSushi = () =>  this.state.sushi.slice(this.state.firstSushi, this.state.lastSushi)

  handleFirstLastAddition = () =>{
    if(this.state.lastSushi === 100){
        this.setState({
          firstSushi: 0,
          lastSushi: 4
        })
    }
    else{
        this.setState({
          firstSushi: this.state.firstSushi +4,
          lastSushi: this.state.lastSushi +4
        })
    }
    console.log(this.state.firstSushi, this.state.lastSushi)
  }

  addPlatesState = () =>{this.setState({plates: this.state.plates.concat("plate")})}

  handleMoneyDeduction = (e) =>{
    console.log(e.target.alt)
    const clickedSushi = this.handleOnlyFourSushi().find(sushi => sushi.name === e.target.alt)
    console.log(clickedSushi, clickedSushi.price);

    if(clickedSushi.price > this.state.money){
      window.alert("No free meals, get out of my shop....")
    }else{

    this.setState({money: this.state.money - clickedSushi.price})
    e.target.src = ''
    e.target.alt = ''
    this.addPlatesState()
    }
  }

  handleAddMoneyState = (amount) =>{
    this.setState({money: this.state.money + parseInt(amount)})
  }


  render() {
    return (
      <div className="app">
        <SushiContainer only4Sushi={this.handleOnlyFourSushi} moreSushi={this.handleFirstLastAddition} handleMoneyDeduction={this.handleMoneyDeduction}/>
        <Table money={this.state.money} plates={this.state.plates} addMoney={this.handleAddMoneyState}/>
      </div>
    );
  }
}

export default App;