import React from 'react';
import {nanoid} from 'nanoid';
import Intro from './intro';
import Questions from './questions';

export default function main(){
    let [startQuize,setStartQuize]=React.useState(false),qlist;
    let [questionsLoaded,setQuestionsLoaded]=React.useState(false);
    function loadQuestions(){
        setStartQuize(true);
    }
    let [questionSet,setQuestionSet]=React.useState([]);
    React.useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then(res=>res.json())
        .then(data=>{
            let questionset=data.results.map((value)=>{
                Array.prototype.insert = function ( index, ...items ) {
                    this.splice( index, 0, ...items );
                };
                let ans=value.incorrect_answers;
                ans.insert(Math.round(Math.random()*3),value.correct_answer)
                return {
                    id:nanoid(),
                    question:value.question,
                    answers:ans,
                    correct_ans:value.correct_answer,
                    marked_ans:""
                }
            });
            setQuestionSet(questionset);
            setQuestionsLoaded(true);
        });
    },[]);
    return(
        <div id='appDiv'>
        {questionsLoaded && (startQuize? <Questions data={questionSet} /> : <Intro loadQuestion={loadQuestions}/>)}
        </div>
    );
}