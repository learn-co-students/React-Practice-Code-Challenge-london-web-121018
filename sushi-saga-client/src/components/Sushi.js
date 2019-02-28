import React, { Fragment } from 'react'


const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(event) => props.removeSushi(event, props.id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 

          /* true ?
          //   null
          : */
            <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price} - {props.id}
      </h4>
    </div>
  )
}

export default Sushi