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
      wallet: 100,
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

  removeSushiFromSushiState = (id) =>{
    console.log(id)
    this.state.sushi.map(sushi => {
      if(sushi.id === id){
        sushi.img_url= ""
      }})
  }

  handleSushiClick = (e) =>{
    const sushiPrice= parseInt(e.target.alt)
    const unqiSushi = parseInt(e.target.id)
    console.log(sushiPrice, unqiSushi);
    if(sushiPrice > this.state.wallet){
      window.alert("No free meals, get out of my shop....")

    }else{
      this.setState({wallet: this.state.wallet - sushiPrice})
      e.target.src = ''
      e.target.alt = ''
      this.removeSushiFromSushiState(unqiSushi)
      this.addPlatesState()
    }
  }

  handleAddMoneyState = (amount) =>{
    this.setState({wallet: this.state.wallet + parseInt(amount)})
  }


  render() {
    return (
      <div className="app">
        <SushiContainer only4Sushi={this.handleOnlyFourSushi} moreSushi={this.handleFirstLastAddition} handleSushiClick={this.handleSushiClick}/>
        <Table money={this.state.money} plates={this.state.plates} addMoney={this.handleAddMoneyState}/>
      </div>
    );
  }
}

export default App;