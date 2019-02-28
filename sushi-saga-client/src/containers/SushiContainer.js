import React, { Fragment } from 'react'
import Sushi from '../components/Sushi';
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {


  return (

    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
             props.sushisOnDisplay.map( sushi => 
              <Sushi 
              key={sushi.id}
              id={sushi.id} 
              img_url={sushi.img_url}
              name={sushi.name}
              price={sushi.price}
              removeSushi={props.removeSushi}
              />
              )
        }
        <MoreButton
         limitSushisInContainer={props.limitSushisInContainer}
         />
      </div>
    </Fragment>
  )
}

export default SushiContainer