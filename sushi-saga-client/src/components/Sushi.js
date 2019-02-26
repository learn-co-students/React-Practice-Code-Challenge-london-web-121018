import React, { Fragment } from 'react'

const Sushi = (props) => {
  const sushi = props.sushi
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => props.handleBeingEaten(sushi.id)}>
        {
          props.eaten(sushi.id) ? null : <img src={sushi.img_url} width="100%" />
          /* Tell me if this sushi has been eaten! */

        }
      </div>
      <h4 className="sushi-details">
        {sushi.name}
        {" - "}
        £{sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
