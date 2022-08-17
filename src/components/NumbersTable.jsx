import React from 'react'

export default function NumbersTable({limit}) {

    const NumBoxesArr = []

    const evenBoxStyle = {
        backgroundColor: 'red',
        width: 100,
        height: 100,
    }

    const oddBoxStyle = {
        backgroundColor: 'white',
        width: 100,
        height: 100,

    }

    for (let i = 1; i <= limit; i++) {

        if (i % 2 === 0) {
            NumBoxesArr.push(<div style={evenBoxStyle} className='eachNumber'><p>{i}</p></div>)

        } else {
            NumBoxesArr.push(<div style={oddBoxStyle} className='eachNumber'><p>{i}</p></div>)
        }
    }


  return (
    <div className='listNumbers'>{NumBoxesArr}</div>
  )
}
