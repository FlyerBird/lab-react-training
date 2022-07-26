import React from 'react';
import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.svg';


export default function creditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    
    const logoCard = type === 'Visa' ? visa : masterCard;

    const divStyle = {
      backgroundColor: `${bgColor}`,
      color: `${color}`,
    };

  return (

    <div className='eachCreditCard' style={divStyle}>

        

        <div>
          <img src={logoCard} alt="Credit Card Logo"/>
        </div>

        <div>{number}</div>
        <div>Expires {expirationMonth}/{expirationYear}</div>
        <div>{bank}</div>
        <div>{owner}</div>

    </div>
    
    
  )
}
