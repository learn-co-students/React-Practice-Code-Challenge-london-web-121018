import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const displaySushi = () => {
    return props.displaySushi.map(s => <Sushi eatSushi={props.eatSushi} sushi={s} eatenSushi={props.eatenSushi} />)
  }

  return (

    < Fragment >
      <div className="belt">
        {displaySushi()}
        <MoreButton more={props.more} />
      </div>
    </Fragment >
  )
}

export default SushiContainer