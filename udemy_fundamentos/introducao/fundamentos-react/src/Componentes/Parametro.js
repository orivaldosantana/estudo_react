import React from 'react' 

export default function Parametro(props) {
    return (
        <div> 
            <h2> Com Parametro </h2>
            <p> 
                <strong> {props.p1} </strong> e <strong> {props.p2} </strong>     
            </p> 
        </div>
    );
}