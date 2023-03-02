//import './App.css';
import React from "react";
import { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import { TodoProvider } from "../context/TodoContext.js";
import TodoContext from "../context/TodoContext.js";

import NoTodos from "../components/NoTodos.js";
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import CreateTodoButton from "../components/CreateTodoButton";
import Loader from "../assets/Loader.js";
import AppUi from "./AppUi.js"

function App() {

  return (
    <>
    <TodoProvider>
      <AppUi/>
      
    </TodoProvider>
    </>
  );
}


export default App;
