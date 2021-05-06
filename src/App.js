import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialTodos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: true,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: initialTodos,
    };
  }

  addItem = (newTaskName) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: newTaskName,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  toggleCompleted = (taskId) => {
    this.setState({
      todos: this.state.todos.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };
  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((task) => !task.completed),
    });
  };

  handleChanges = (e) => {
    this.setState({
      newTaskName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addItem(this.state.newTaskName);
  };

  handleClick = () => {
    this.toggleCompleted(this.state.todos.completed);
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addItem={this.addItem}
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
        />
        <div>
          <TodoList
            clearCompleted={this.clearCompleted}
            toggleCompleted={this.toggleCompleted}
            handleClick={this.handleClick}
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;
