// Code Keypad Component Here
import React from "react";

function Keypad (){
    return (
        <div>
            <input type="password" onChange={() => {console.log("ENtering password...")}}>
            </input>
        </div>
    )
}

export default Keypad;