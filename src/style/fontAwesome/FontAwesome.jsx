import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPoo } from '@fortawesome/free-solid-svg-icons'

// https://fontawesome.com/search?s=solid&f=classic&o=r
const FontAwesome = () => {
    const style = {
        color : "red",
        fontSize : "50px"
    }
    
    return (
        <div>
            <FontAwesomeIcon icon={faUser} style={style}/>
            <FontAwesomeIcon icon={faPoo}/>
        </div>
    );
};

export default FontAwesome;