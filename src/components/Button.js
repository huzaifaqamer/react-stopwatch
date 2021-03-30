import React from 'react';
import '../css/Button.css';


const Button = ({onButtonClicked, label}) => {
    return (
        <div>
            <button className="button" onClick={onButtonClicked}>{label}</button>
        </div>
    );
}

export default Button;