import React from 'react';
export default function main(props){

    return(
        <div className='box'>
        <h1>Tenzies</h1>
        <p>Challenge your GK</p>
        <button type='button' onClick={props.loadQuestion} id='start--btn' >click</button>
        </div>
    );
}