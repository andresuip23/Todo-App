import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoSearch.css';


export default function TodoSearch(){

    const {searchValue,setSearchValue}=useContext(TodoContext);

    const onSearchValueChange=(e)=>{
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }
    return(
        <div className='holder'>
            <input className='TodoSearch' value={searchValue} placeholder='Looking for a task?' onChange={onSearchValueChange}></input>
        </div>
    )
}