import React from "react";
import { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import { TodoProvider, TodoContext } from "../context/TodoContext.js";

import NoTodos from "../components/NoTodos.js";
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import CreateTodoButton from "../components/CreateTodoButton";
import Loader from "../assets/Loader.js";
import { Modal } from "./Modal.js";
import TodoForm from "../components/TodoForma.js";


export default function AppUi(){

    const {loading,
          item,
          searchedTodos,
          completeTodos,
          deleteTodos,
          setOpenModal,
          openModal}= useContext(TodoContext);

    return(
        <>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {loading && <Loader />}
          {item.length < 1 && !loading && <NoTodos />}
          {searchedTodos.map((item) => (
            <TodoItem
              key={item.text}
              text={item.text}
              completed={item.completed}
              onComplete={() => completeTodos(item.text)}
              onDelete={() => deleteTodos(item.text)}
            />
          ))}
        </TodoList>
        {!!openModal && <Modal>
          <TodoForm/>
        </Modal>}
        <CreateTodoButton  setOpenModal={setOpenModal}/>
      </>
    );
};