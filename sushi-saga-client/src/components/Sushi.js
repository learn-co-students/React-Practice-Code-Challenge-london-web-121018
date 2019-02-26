import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"> 
          { 
          props.sushi.price ?
          /* Tell me if sushi has been eaten! */ 
          <img src={props.sushi.img_url} onClick={() => props.subtract(props.sushi)} width="100%" />
          :
          null
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi