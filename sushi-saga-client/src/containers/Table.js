import React, { Fragment } from 'react'
import SushiWallet from './SushiWallet'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
        <SushiWallet addMoney={props.addMoney}/>
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.plates)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table