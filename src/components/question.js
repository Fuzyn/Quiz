import AnswerOne from './answerOne';
import AnswerTwo from './answerTwo';
import AnswerDND from './answerDND';
import './question.css';

const Question = (props) => {
    const scorePlus = props.question.correct[0];
    const scorePlusDND = props.question.correct;

    const AnswerType = () => {
        if(props.question.correct.length === 1) {
            return <div>
                <AnswerOne correctAnswer={scorePlus} answer={props.question.choices} isClicked={props.click} counter={props.counter}/>
            </div>
        }
        else if (props.question.correct.length === 2) {
            return <div>
                <AnswerTwo correctAnswer={scorePlusDND} answer={props.question.choices} isClicked={props.click} counter={props.counter}/>
            </div>
        }
        else {
            return <div>
                <AnswerDND correctAnswer={scorePlusDND} answer={props.question.choices} isClicked={props.click} counter={props.counter}/>
            </div>
        }
    };

    return <div className='questionField'>
        <h1 className='questionNumber'>{`${props.qId +1}/${props.quizLength}`}</h1>
        <span className='question'>{props.question.question}</span>
        <AnswerType correctAnswer={scorePlus} answer={props.question.choices} isClicked={props.isClicked} nextQuestion={props.counter}/>
    </div>
}

export default Question;