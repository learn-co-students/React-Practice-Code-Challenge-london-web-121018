import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';


const SushiContainer = ( {sushis, nextFourSushis, isEaten, eatSushi} ) => {
  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi =>
          <Sushi
          key={sushi.id}
          sushi={sushi}
          // eaten is a "new" prop that we have created here
          eaten={isEaten.includes(sushi)}
          handleClick={() => eatSushi(sushi)}
           />)}
        <MoreButton nextFourSushis={nextFourSushis}/>

      </div>
    </Fragment>
  )
}

export default SushiContainer
