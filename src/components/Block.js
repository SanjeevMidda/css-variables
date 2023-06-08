import React from 'react'

function Block({color, transform}) {

    let blockStyles = {
        backgroundColor:color,
        '--uniqueValue': transform
    }
  return (
    <div className="block" style={blockStyles}></div>
  )
}

export default Block