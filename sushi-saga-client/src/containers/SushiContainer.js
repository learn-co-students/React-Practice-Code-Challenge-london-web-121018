import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, currentFour, nextFour, budget, addEmptyPlate}) => {
  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} budget={budget} addEmptyPlate={addEmptyPlate} />).slice(currentFour[0], currentFour[1])}
        <MoreButton nextFour={nextFour} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
