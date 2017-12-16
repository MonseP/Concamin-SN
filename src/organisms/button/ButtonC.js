import React from 'react';
import './button.css';


const ButtonC = ({label, color, width}) => {

    return(
            <a href=""
               title={label}
               className="button btnPush btnBlueGreen"
               style={{backgroundColor:color?color:"#00AE68", width:width?width:120
               }}
            >
                {label}
            </a>

        )
};

export default ButtonC;