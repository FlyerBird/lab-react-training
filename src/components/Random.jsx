import React from 'react'

export default function Random(props) {
    const {min, max} = props;
    let randomNum=Math.floor(Math.random() * max);

  return (
    <div className='eachRandomBox'>
        <p>Random value between {min} and {max} = {randomNum}</p>
    </div>
  )
}
