import React from "react";

function Greetings (props) {
    const {lang, children} = props;
   
    let greet = "";
    
    if(lang === 'en'){
        greet = 'Hello'
    } else if (lang === 'de'){
        greet = "Hallo"
    } else if (lang === 'fr'){
        greet = "Bonjour"
    } else if (lang === 'es'){
        greet = 'Hola'
    }

    return (
    <div className="eachGreetingsBox">
      <p>{greet} {children} </p>  
        
     </div>

    )
    
    
}



export default Greetings;