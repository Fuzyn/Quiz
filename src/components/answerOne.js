import React from "react";
import './answer.css';

const AnswerOne = (props) => {
    return <div className='choices'>
            {props.answer.map((choice,i)=>{
                return <div className={`choice ${props.correctAnswer === choice && props.isClick ? 'clicked':''}`}
                key={i}
                onClick={()=>props.counter(props.correctAnswer === choice)}>
                    {choice}
                </div>
            })}
        </div>
};

export default AnswerOne;