import React, { useEffect, useState } from "react";
import { initialData } from './components/initialData';
import { getCategoryImage } from './components/getCategoryImage';
import Question from './components/question';
import nameCategory from './components/nameCategory'
import Category from './category';
import './quizApp.css';

const QuizApp = (props) => {
    const [qId, setQnId] = useState(-1);
    const [click, setClick] = useState(false);
    const [score, setScore] = useState(0);

    const categoryQuestions = props.categoryName && initialData[props.categoryName];

    useEffect(() => {
        setQnId(-1);
        setScore(0);
    }, [props.categoryName])

    const counter = (correct) => {
        if (correct) {
            setScore(score + 1);
        }
        setClick(true);
        setTimeout(() => {
            setQnId(qId + 1)
            setClick(false)
        }, 0)
    };
    const nmCategory = nameCategory(props.categoryName);
    const categoryLogo = getCategoryImage(props.categoryName);

    const questionScreen = () => {
        if (qId < 0) {
            return <div className='main-quiz'>
                <div className='one-catHead'><p>WYBRANA KATEGORIA:</p></div>
                <div className='one-img'><img src={categoryLogo} alt={props.categoryName} /></div>
                <hr />
                <div className='name-category'>{nmCategory}</div>
                <button className='buttonQ' onClick={() => setQnId(0)}><p>ROZPOCZNIJ</p></button>
            </div>
        }
        else if (qId < categoryQuestions.length) {
            return <Question
                question={categoryQuestions[qId]} qId={qId}
                counter={counter}
                quizLength={categoryQuestions.length} isClicked={click} />
        }
        else {
            return <div className='three-main'>
                <div className='three-id-category'>
                    <div><img className='three-img' src={categoryLogo} alt={props.categoryName} /></div>
                    <hr />
                    <div className='name-category'>{nmCategory}</div>
                </div>
                <div>
                    <span className='score'>TWÓJ WYNIK:   </span>
                    <span className='score'>{score}/10</span>
                </div>
                <button className='buttonQ' onClick={() => {
                    setQnId(-1)
                    setScore(0)
                }}>
                    <p>POWTÓRZ TEST</p>
                </button>
                <div className='different-category'><Category setCategory={props.setCategory} /></div>
            </div>
        }
    }
    return <div>
        {questionScreen()}
    </div>
};

export default QuizApp;