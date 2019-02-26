import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"> 
          {props.url === '' ? null : <img src={props.url} width="100%" alt={props.price} id={props.id} onClick={props.handleSushiClick}/>}
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi

