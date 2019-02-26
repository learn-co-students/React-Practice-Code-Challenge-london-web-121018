import React, { Component } from 'react'

// needs state to determine if eaten or not?

class Sushi extends Component {
  constructor() {
    super()

    this.state = {
      isEaten: false,
    }
  }


  handleClick = (event) => {
    this.setState(prevState => ({
      isEaten: !prevState.isEaten,
    }))
  }


  render () {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => {this.handleClick(); this.props.spendMoney(); this.props.eatSushi();}}
           >
        {this.state.isEaten ===
          true ?
            null
          :
            <img src={this.props.img_url} width="100%" alt={this.props.name} />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.name} - £{this.props.price}
      </h4>
    </div>
  )
}
}

export default Sushi
