import React from "react";

const TodoForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="task"
          onChange={props.handleChanges}
          //value={this.state.newTaskName}
        />
        <button>Add Task</button>
      </form>
      <button onClick={() => props.clearCompleted()}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
