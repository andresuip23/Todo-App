import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/todoCounter.css'

export default function TodoCounter(){

    const {completedTodos,total,item} = useContext(TodoContext);
    return(
        <h2 className='TodoCounter'>
            You have completed {completedTodos} of {total} Tasks
        </h2>
    )
};