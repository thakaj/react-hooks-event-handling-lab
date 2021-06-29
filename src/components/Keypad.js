// Code Keypad Component Here

import React from "react"

function Keypad(){
    function passwordCallBack(event){
        return console.log('Entering password...')
    }
    return (
        <input type="password" onChange={passwordCallBack}>
        
        </input>
    )
}

export default Keypad