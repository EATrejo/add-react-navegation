import React from "react";
import { useState } from "react";
import "./Home.css";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import Boton from "./Boton";

export const Home = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Limpiar mi cuarto.",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudiar Python.",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Recoger a Ximena Sariñana en el aeropuerto.",
      isCompleted: false,
    },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo }]);
  };

  const markComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const editTitle = (index, title) => {
    const newTodos = [...todos];
    newTodos[index].text = title;
    setTodos(newTodos);
  };

  return (
    <div className="parent-container">
      <div className="container top-container">
        <div className="app">
          <div className="todoform">
            <TodoForm addTodo={addTodo} />
            <Todos
              todos={todos}
              markComplete={markComplete}
              editTitle={editTitle}
            />
          </div>
        </div>
        <div className="felicitar-container">
          <Boton />
        </div>
      </div>
    </div>
  );
};

export default Home;
