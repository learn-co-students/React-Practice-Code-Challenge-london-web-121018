import React from 'react'


export default class Sushi extends React.Component {

  state = {
    sushiIsEaten: false
  }

  handleClick = () => {
    if(this.props.budget >= this.props.sushi.price) {
      this.setState({sushiIsEaten: true})
      this.props.addEmptyPlate(this.props.sushi.price)
    } else {
      window.alert("You don't have enough $$$")
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.handleClick}>
          { this.state.sushiIsEaten
            ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}
