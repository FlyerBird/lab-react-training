import React from "react";

function IdCard(props) {
    
    return(
        <div className="IdCard">
            <div>
                <img src={props.picture} alt="userPicture"/>
            </div>
            
            <div>
                <p><strong>First name:</strong>{props.firstName}</p>
                <p><strong>Last name:</strong>{props.lastName}</p>
                <p><strong>Gender:</strong>{props.gender}</p>
                <p><strong>Height:</strong>{props.height}</p>
                <p><strong>Birth:</strong>{props.birth}</p>
            </div>
         
         
        </div>

    )
}








export default IdCard;