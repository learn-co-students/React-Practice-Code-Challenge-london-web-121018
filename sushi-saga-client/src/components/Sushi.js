import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"> 
          <img src={props.url} width="100%" alt={props.name} id={props} onClick={props.handleMoneyDeduction}/>
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi

