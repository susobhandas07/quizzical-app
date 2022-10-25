import React from 'react';
import Question from './question';
export default function main(props){
    let answers,[questionObjects,setQuestionObjects]=React.useState(props.data);
    var [count,setCount]=React.useState(0),[markedAns,setMarkedAns]=React.useState([]);
    function storeAnswers(event,id){
        setMarkedAns(prevState=>[...prevState,event.target]);
        let answer=event.target.value;
        setQuestionObjects(prevState=>{
            return prevState.map(value=>{
                return value.id===id?{...value,marked_ans:answer}:value
            })
        });
    }
    function checkAnswers(event){
        let c=0;
        questionObjects.forEach(value=>{
            let elements=document.getElementsByClassName(value.id);
            for(let i=0;i < elements.length;i++){
                if(elements[i].innerHTML===value.correct_ans){
                    elements[i].classList.add('correct');
                }
                else{
                    if(elements[i].innerHTML===value.marked_ans){
                        elements[i].classList.add('in_correct');
                    }
                    elements[i].style.opacity=0.5;
                }
            }
            c=value.marked_ans===value.correct_ans?c+1:c
        });
        setCount(c);
        // console.log(count);
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('reload').classList.remove('hidden'); 
        event.target.classList.add('hidden');
    }
    let questionElements=questionObjects.map((q,index)=> {
        return (<Question question={q.question} answers={q.answers} marked={q.marked_ans} key={q.id} id={q.id} handeler={storeAnswers}/>) });
    return(
        <div className='question--container'>
        {questionElements}
        <section className='result'>
        <p id='result' className='hidden'>You have scored {count}/5 correct answers</p>
        <button type='button' onClick={()=>window.location.reload()} className='showResult hidden' id= 'reload'>Re-Try</button>        
        <button type='button' onClick={(event)=>checkAnswers(event)} className='showResult'>Check</button>
        </section>
        </div>
    );
}