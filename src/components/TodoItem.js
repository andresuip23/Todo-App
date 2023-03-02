import React from "react";
import "../styles/TodoItem.css";
import { TrashIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

function TodoItem({ text, completed, onComplete,onDelete }) {

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
        <CheckCircleIcon className="Checkicon" onClick={onComplete} />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete">
        <TrashIcon className="Trashicon" onClick={onDelete} />
      </span>
    </li>
  );
}

export default TodoItem;
