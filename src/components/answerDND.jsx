import React, {useState} from 'react'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import './answer.css';

const AnswerDND = (props) => {

    const [resultAnswersArray, setResultAnswersArray] = useState(props.answer)

    const answersArray = resultAnswersArray.map((answer, idx) => ({id: idx, answer}));
    const onDragEnd = (result) => {
        let sortedList = [...resultAnswersArray];
        const [removed] = sortedList.splice(result.source.index, 1);
        sortedList.splice(result.destination.index, 0, removed);
        setResultAnswersArray(sortedList);
    };

    const handleSubmitAnswers = () => {
        const isValid = resultAnswersArray.join(' ') === props.correctAnswer.join(' ');
        props.counter(isValid);
    }
    return (
        <div className='questionDND'>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={provided.style}
                            {...provided.droppableProps}
                        >
                            {answersArray.map((item, index) => (
                                <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            className='choice'
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={provided.draggableProps.style}
                                        >
                                            {item.answer}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <button onClick={handleSubmitAnswers} className='buttonSend'>Następne pytanie</button>
        </div>

    );
}


export default AnswerDND;