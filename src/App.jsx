import React from 'react';
import { nanoid } from 'nanoid';
import Intro from './intro';
import Questions from './questions';
import './assets/spin-load-an.css';

export default function main() {
    let [startQuize, setStartQuize] = React.useState(false), qlist;

    let [length, setLength] = React.useState(5), [subject, setSubject] = React.useState('any');

    let [questionSet, setQuestionSet] = React.useState([]);

    //fetchs questions from the api and sets startQuize to TRUE
    function loadQuestions(event) {
        //change the start button to an loading icon
        let element = event.target, parent = element.parentNode;
        const child = document.createElement('div');
        child.setAttribute('class', 'element');
        parent.removeChild(element);
        parent.appendChild(child);

        //api fetch
        fetch(`https://opentdb.com/api.php?amount=${length}${subject !== 'any' ? `&${subject}` : ""}&type=multiple`)
            .then(res => res.json())
            .then(data => {
                let questionset = data.results.map((value) => {
                    Array.prototype.insert = function (index, ...items) {
                        this.splice(index, 0, ...items);
                    };
                    let ans = value.incorrect_answers;
                    ans.insert(Math.round(Math.random() * 3), value.correct_answer)
                    return {
                        id: nanoid(),
                        question: value.question,
                        answers: ans,
                        correct_ans: value.correct_answer,
                        marked_ans: ""
                    }
                });
                setQuestionSet(questionset);
                setStartQuize(true);
            })
    }

    //function to change number of questions and subject of quize
    const handleChange = (event) => {
        let { name, value } = event.target;
        if (name === 'length') setLength(value);
        else if (name === 'subject') setSubject(value);
    };
    return (
        <>
            {startQuize ? <Questions data={questionSet} /> : <Intro loadQuestion={loadQuestions} handleChange={handleChange} length={length} subject={subject} />}
        </>
    );
}