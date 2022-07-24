import React from 'react'

export default function BoxColor(props) {
    const {r, g, b} = props

    const rectangleStyle = {
          backgroundColor: `rgb( ${r}, ${g}, ${b} )`
       }
       
  return (

    <div style = {rectangleStyle}className='eachBoxColor'>
    <p>rgb ({r},{g},{b})</p>
    
    </div>
  )
}




