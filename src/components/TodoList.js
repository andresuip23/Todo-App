import React from 'react';
import '../styles/TodoList.css'


export default function TodoList ({children}){
    return(
        <section>
        <ul className='TodoList'>
          {children}
        </ul>
      </section>
    )
}