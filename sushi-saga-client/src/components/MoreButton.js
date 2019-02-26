import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.dealSushis()}>
            More sushi!
          </button>
}

export default MoreButton