import React from 'react';
export default function main(props) {

    return (
        <div className='box'>
            <fieldset className='choices'>
                {/*drop down menue for number of questions*/}
                <section>
                    <label htmlFor='length'>No of Questions</label>
                    <select className='drop-down' name='length' id='length' value={props.length} onChange={props.handleChange}>
                        <option value="5" >5</option>
                        <option value="10">10</option>
                    </select>
                </section>
                {/* drop down menue for subject of quize */}
                <section>
                    <label htmlFor="subject">Choose Subject</label>
                    <select className='drop-down' name='subject' value={props.subjects} id='subject' onChange={props.handleChange}>
                        <option value="any" >Any</option>
                        <option value="10">Book</option>
                        <option value="11">Film</option>
                        <option value="15">Video Game</option>
                        <option value="17">Science & Naure</option>
                        <option value="20">Mythology</option>
                    </select>
                </section>
            </fieldset>
            <h1>Tenzies</h1>
            <p>Challenge your GK</p>
            <button type='button' onClick={props.loadQuestion} id='start--btn' >Start</button>
        </div>
    );
}