import React from 'react'

export default function DriverCard(props) {
   const {name, rating, img, car} = props;
   
   let ratingDriver = "";

   if (rating < 1) {
    ratingDriver = "☆☆☆☆☆"
} else if (rating >= 1 && rating < 1.5) {
    ratingDriver = "★☆☆☆☆"
} else if (rating >= 1.5 && rating < 2.5) {
    ratingDriver = "★★☆☆☆"
} else if (rating >= 2.5 && rating < 3.5) {
    ratingDriver = "★★★☆☆"
} else if (rating >= 3.5 && rating < 4.5) {
    ratingDriver = "★★★★☆"
} else if (rating >= 4.5 ) {
    ratingDriver = "★★★★★"
}

  return (
    <div className='eachDriverCard'>
        <img src={img} alt="driver's card" />
        <div>
            <p>{name}</p>
            <p>{ratingDriver}</p>
            <p>{car.model} - {car.licensePlate}</p>
            
        </div>
    </div>
  )
}
