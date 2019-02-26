import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => <Sushi sushi={sushi} key={sushi.id} handleBeingEaten={props.handleBeingEaten} eaten={props.eaten} />)
        }
        <MoreButton handleClick={props.handleClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer