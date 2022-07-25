import React from 'react';


export default function creditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    
  return (

    <div className='eachCreditCard'>
        <div>{number}</div>
        <div>Expires {expirationMonth}/{expirationYear}</div>
        <div>{bank}</div>
        <div>{owner}</div>

    </div>
    
    
  )
}
