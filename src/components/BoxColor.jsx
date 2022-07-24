import React from 'react'

export default function BoxColor(props) {
    const {r, g, b} = props
  return (
    <div className='eachBoxColor'>
    <p>{r}{g}{b}</p>
    
    </div>
  )
}
