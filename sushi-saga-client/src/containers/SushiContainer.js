import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /*
             Render Sushi components here!
          */
        props.sushis.map(sushi => <Sushi
          id={sushi.id}
          name={sushi.name}
          img_url={sushi.img_url}
          price={sushi.price}
          spendMoney={props.spendMoney}
          eatSushi={props.eatSushi}
          />)

        }


        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer;
