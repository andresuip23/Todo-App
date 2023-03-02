import React, { createContext, useState, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';



const TodoContext = createContext();

function TodoProvider({children}){

  

     
  const {item,saveItem,loading,error} = useLocalStorage('TODOS_V1',[]);

  const [openModal, setOpenModal]= useState(false);
   
  const [searchValue, setSearchValue] = useState("");
  
  const completedTodos = item.filter((todos) => !!todos.completed).length;
  const total = item.length;

  let searchedTodos = [];

  if (searchValue.length <= 1) {
    searchedTodos = item;
  } else {
    searchedTodos = item.filter((todo) => {
      const todotext = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todotext.includes(searchText);
    });
  }


  const completeTodos = (text) => {
    const todoIndex = item.findIndex((item) => item.text === text);
    const newItem = [...item];
    newItem[todoIndex].completed = true;
    saveItem(newItem);
  };

  const deleteTodos = (text) => {
    const todoIndex = item.findIndex((item) => item.text === text);
    const newItem = [...item];
    newItem.splice(todoIndex,1);
    saveItem(newItem);
  };

  const addItem = (text) => {
    const newItem = [...item];
    newItem.push({
      completed:false,
      text,
    })
    saveItem(newItem);
  };


    return(
        <TodoContext.Provider value={{
            loading,
            error,
            addItem,
            item,
            total,
            completedTodos,
            searchValue,
            searchedTodos,
            setSearchValue,
            completeTodos,
            deleteTodos,
            setOpenModal,
            openModal,
        }}>
            {children}
        </TodoContext.Provider>



    );
};

export {TodoContext,TodoProvider};