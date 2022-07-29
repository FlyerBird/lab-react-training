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

  let month = (elem) => {
    return String(elem).length === 1 ? '0' + expirationMonth : String(expirationMonth);
  }  
    
  let twoDigitYear = String(expirationYear).slice(2);

  
  let lastFourNumbers = number.slice(12,16);
 

  return (

    <div className='eachCreditCard' style={divStyle}>

        <div className='logoCard'>
          <img src={logoCard} alt="Credit Card Logo"/>
        </div>

        <div className='maskNumber'>•••• •••• •••• {lastFourNumbers}</div>

        <div className='expirationAndBank'>
          <div>
            Expires {month(expirationMonth)}/{twoDigitYear}
          </div>
          <div>
            {bank}
          </div>
        
        </div>

        <div className='owner'>{owner}</div>

    </div>
    
    
  )
}
