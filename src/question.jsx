import React from 'react';
export default function main(props){
    let styles=props.answers.map(value=>{
        return {
            backgroundColor: props.marked===value ? 'hsla(240,100%,50%,0.5)' : ''
        }
    });
    return(
        <fieldset className='container'>
        <legend dangerouslySetInnerHTML={{__html:props.question}}/>
        <input checked={props.marked===props.answers[0]} onChange={(event)=>props.handeler(event,props.id)} type='radio' id={props.answers[0]} name={props.question} value={props.answers[0]}/>
        <label className={props.id} style={styles[0]}  htmlFor={props.answers[0]} dangerouslySetInnerHTML={{__html:props.answers[0]}} />
        <br />
        <input checked={props.marked===props.answers[1]} onChange={(event)=>props.handeler(event,props.id)} type='radio' id={props.answers[1]} name={props.question} value={props.answers[1]}/>
        <label className={props.id} style={styles[1]}  htmlFor={props.answers[1]} dangerouslySetInnerHTML={{__html:props.answers[1]}} />
        <br />
        <input checked={props.marked===props.answers[2]} onChange={(event)=>props.handeler(event,props.id)} type='radio' id={props.answers[2]} name={props.question} value={props.answers[2]}/>
        <label className={props.id} style={styles[2]}  htmlFor={props.answers[2]} dangerouslySetInnerHTML={{__html:props.answers[2]}} />
        <br />
        <input checked={props.marked===props.answers[3]} onChange={(event)=>props.handeler(event,props.id)} type='radio' id={props.answers[3]} name={props.question} value={props.answers[3]}/>
        <label className={props.id} style={styles[3]}  htmlFor={props.answers[3]} dangerouslySetInnerHTML={{__html:props.answers[3]}} />
        </fieldset>
    );
}