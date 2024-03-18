import { useState } from "react";
import useTodo from "../../Store/TodolistProvide";
import './style.css'

const TodoForm = () => {
  const { addTodo, todoArr, removeTodo } = useTodo();
  const [inputValue, setInputValue] = useState('');

  const changeValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div className="whole-page">
      <div className="header">
        <h1 className="todo-header">- To-do now -</h1>
      </div>
      <div className="todolist-container">
        <form className="todo-form">
          <input className="todo-input" type="text" value={inputValue} onChange={changeValue} />
          <button className="addtodo-button" type="button" onClick={handleAddTodo}>Add Todo</button>
        </form>
        <div className="todo-list-container">
          <ul className="todo-ul">
            {
              todoArr.map((item, index) => {
                return (
                  <li className="todo-li" key={index}>{item}
                    <button className="remove-todo" onClick={() => { removeTodo(index) }}> <img className="trash-icon" src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png" alt="Remove" /> </button></li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>


  );
};

export default TodoForm;