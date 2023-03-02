import React from 'react';
import '../styles/CreateTodoButton.css'
import { PlusIcon } from '@heroicons/react/20/solid';

function CreateTodoButton({setOpenModal}) {

    const buttonCLick=()=>{
        setOpenModal(true)
    }

    return (  
        <button className='CreateTodoButton' onClick={buttonCLick}><PlusIcon/></button>
    );
}

export default CreateTodoButton;