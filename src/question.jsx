import React from 'react';
export default function main(props) {
    return (
        <fieldset className='container'>
            <legend dangerouslySetInnerHTML={{ __html: props.question }} />
            <input checked={props.marked === props.answers[0]} onChange={(event) => props.handeler(event, props.id)} type='radio' id={props.answers[0]} name={props.question} value={props.answers[0]} />
            <label className={props.id} htmlFor={props.answers[0]} dangerouslySetInnerHTML={{ __html: props.answers[0] }} />
            <br />
            <input checked={props.marked === props.answers[1]} onChange={(event) => props.handeler(event, props.id)} type='radio' id={props.answers[1]} name={props.question} value={props.answers[1]} />
            <label className={props.id} htmlFor={props.answers[1]} dangerouslySetInnerHTML={{ __html: props.answers[1] }} />
            <br />
            <input checked={props.marked === props.answers[2]} onChange={(event) => props.handeler(event, props.id)} type='radio' id={props.answers[2]} name={props.question} value={props.answers[2]} />
            <label className={props.id} htmlFor={props.answers[2]} dangerouslySetInnerHTML={{ __html: props.answers[2] }} />
            <br />
            <input checked={props.marked === props.answers[3]} onChange={(event) => props.handeler(event, props.id)} type='radio' id={props.answers[3]} name={props.question} value={props.answers[3]} />
            <label className={props.id} htmlFor={props.answers[3]} dangerouslySetInnerHTML={{ __html: props.answers[3] }} />
        </fieldset>
    );
}