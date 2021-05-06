import React from "react";
import "./Todo.css";

const Todo = (props) => {
  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     this.toggleCompleted(this.props.task.id);
  //   };

  return (
    <div
      onClick={() => props.toggleCompleted(props.task.id)}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
