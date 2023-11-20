import React from 'react'
import "./PopUp.css"

function PopUp(props) {
    return (
        <div className='popUp text-center p-2'>
            {props.children}
        </div>
    )
}

export default PopUp