import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const renderSushis = () => {
    return props.sushis.map(sushi => <Sushi key={sushi.id} subtract={props.subtract} sushi={sushi} />)
  } 
  return (
    <Fragment>
      <div className="belt">
        {
          renderSushis()
        }
        <MoreButton dealSushis={props.dealSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer