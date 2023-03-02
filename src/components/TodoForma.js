import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoForm.css'

export default function TodoForm(){
    const {setOpenModal, openModal,addItem} = useContext(TodoContext);

    const[newItemValue,setNewItemValue] = useState('');

    const onCancel = ()=>{
        setOpenModal(prevState => !prevState)
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        addItem(newItemValue);
        setOpenModal(false);
    }
    
    const onChange = (e)=>{
       setNewItemValue(e.target.value)

    }

    return(
        <form onSubmit={onSubmit}>
            <label>Make a New task</label>
            <textarea value={newItemValue} onChange={onChange} placeholder='Insert a new Task' />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" type='button' onClick={onCancel}>
                    Cancel
                </button>
                <button className="TodoForm-button TodoForm-button--add" type='submit'>
                    Add Task
                </button>
            </div>

        </form>
    )
};