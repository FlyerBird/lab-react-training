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
    
  let twoDigitYear = String(expirationYear).slice(2);

    console.log(twoDigitYear)

  return (

    <div className='eachCreditCard' style={divStyle}>

        <div className='logoCard'>
          <img src={logoCard} alt="Credit Card Logo"/>
        </div>

        <div>{number}</div>
        <div>Expires {expirationMonth}/{twoDigitYear}</div>
        <div>{bank}</div>
        <div>{owner}</div>

    </div>
    
    
  )
}
