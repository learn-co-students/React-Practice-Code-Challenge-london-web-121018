import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.setDisplaySushi()}>
            More sushi!
          </button>
}

export default MoreButton