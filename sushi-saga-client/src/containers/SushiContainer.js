import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {

  


  return (
    <Fragment>
      <div className="belt">
        {

         props.displaySushi.map(sushi => 
         <Sushi 
         sushi={sushi} 
         key={sushi.id} 
         sushiEaten={props.sushiEaten} 
         eatSushi={props.eatSushi}/>)
          
        }
        <MoreButton 
        setDisplaySushi={props.setDisplaySushi}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer