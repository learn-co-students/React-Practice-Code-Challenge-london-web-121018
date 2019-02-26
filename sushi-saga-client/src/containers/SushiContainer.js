import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer = (props) => {

  

  return (
    <Fragment>
      <div className="belt">
        {
          props.only4Sushi().map((sushi, idx) =>{
            return <Sushi key={idx} id={sushi.id} name={sushi.name} url={sushi.img_url} price={sushi.price} handleMoneyDeduction={props.handleMoneyDeduction}/> ;
          })
        }
        <MoreButton  moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer