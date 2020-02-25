import React from "react";

class Addtask extends React.Component {
  state = {
    Task: null,
    id: null
  };
  Change = e => {
    this.setState({
      Task: e.target.value,
      id: Math.random() * 10
    });
  };
  Submit = e => {
    e.preventDefault();
    if (document.getElementById("input").value === "") {
      alert("Please add something !!");
    } else {
      document.getElementById("input").value = "";
      this.props.Add(this.state);
    }
  };
  render() {
    return (
      <form onSubmit={this.Submit}>
        <div className="my-4">
          <input
            onChange={this.Change}
            id="input"
            placeholder="Create Todo task"
          />
        </div>
        <small>Click on the todo to remove it!</small>
        <br />
        <button
          type="submit"
          className="btn btn-primary my-4 shadow"
          placeholder="Add"
        >
          Create Todo
        </button>
      </form>
    );
  }
}

export default Addtask;
