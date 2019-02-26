import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h2 className="remaining">
        You have £{parseInt(props.budget) - parseInt(props.expenditure)} remaining!
      </h2>
      <div className="table">
        <div className="stack">
          {

              // renderPlates takes an array
               //and renders an empty plate
               //for every element in the array

            renderPlates([props.eatenSushi])
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
