 import React from "react";
import Addtask from "./Addtask";
import Tasks from "./Display";
import "./display.css";
class App extends React.Component {
  state = {
    Task: []
  };
  Add = task => {
    let mystate = [...this.state.Task, task];
    this.setState({
      Task: mystate
    });
  };
  taskdel = id => {
    let Tasks = this.state.Task.filter(Task => {
      return Task.id !== id;
    });
    this.setState({
      Task: Tasks
    });
  };

  render() {
    return (
      <div className="text-center container">
        <h1 className="display-3 my-4 blue-text">Todo's List</h1>
        <Tasks Tasks={this.state.Task} dante={this.taskdel} />
        <Addtask Add={this.Add} />
      </div>
    );
  }
}

export default App;
