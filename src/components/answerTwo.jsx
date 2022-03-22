import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './answerTwo.css';

const AnswerTwo = (props) => {

    const resultAnswersArray = props.answer
    // const [resultAnswersArray, setResultAnswersArray] = useState(props.answer)
    const emptyArray = [];
    // const answersArray = resultAnswersArray.map((answer, idx) => ({ id: idx, answer }));

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        
        return result;
    };

    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };

    const answersArray = resultAnswersArray.map((answer, idx) => ({ id: idx, answer }));
    const usersArray = emptyArray.map((answer, idx) => ({ id: idx, answer }));
    const [table, setTable] = useState([answersArray, usersArray])

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(table[sInd], source.index, destination.index);
            const newState = [...table];
            newState[sInd] = items;
            setTable(newState);
        } else {
            const result = move(table[sInd], table[dInd], source, destination);
            const newState = [...table];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setTable(newState.filter(group => group.length));
        }
    };

    const handleSubmitAnswers = () => {
        const userAnswer = table.flat();
        userAnswer.splice(0,3)      
        const firstAnswer = userAnswer.pop()
        const secondAnswer = userAnswer.pop()
        const userArray = [firstAnswer.answer, secondAnswer.answer]
        const isValid = userArray.join(' ') === props.correctAnswer.join(' ');
        props.counter(isValid);
    }

    return (
        <div className='questionTwo'>
            <DragDropContext onDragEnd={onDragEnd}>
                {table.map((el, ind) =>
                    <Droppable key={ind} droppableId={`${ind}`}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={provided.style}
                                {...provided.droppableProps}
                                className='answerBox'                                
                            >
                                {el.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={`${item.id}`}
                                        index={index}                                        
                                    >
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
                )}
            </DragDropContext>
            <button onClick={handleSubmitAnswers} className='buttonSend'>Następne pytanie</button>
        </div >

    );
}

export default AnswerTwo;