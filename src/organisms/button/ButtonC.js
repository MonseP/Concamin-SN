import React from 'react';
import FontAwesome from 'react-fontawesome';
import './button.css';


const ButtonC = ({onClick, text, backgroundColor, width, icon}) => {
    return(
        <button className="button fade"
                style={{verticalAlign:'middle',
                        backgroundColor:backgroundColor?backgroundColor:"#00AE68",
                        width:width?width:110
                }}
                onClick={onClick} >
            <span>{text}</span>
            <span>{icon && <FontAwesome name={icon} size={"2x"} style={{paddingLeft:5}} />}</span>
        </button>

    )
};

export default ButtonC;