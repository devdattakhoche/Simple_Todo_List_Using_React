import React from "react";

const Tasks = ({ Tasks, dante }) => {
  if (Tasks.length !== 0) {
    var List = Tasks.map(ninjas => {
      return (
        <div
          className="list-group-item list-group-item-primary  overflow-auto shadow-lg p-3  bg-white rounded"
          key={ninjas.id}
          onClick={() => {
            dante(ninjas.id);
          }}
        >
          <h3 className="font-italic text-monospace text-break">
            {ninjas.Task}
          </h3>
        </div>
      );
    });
  } else {
    List = <h1 className="display-4">Woohoo!!! No todos left today.</h1>;
  }
  return <div>{List}</div>;
};

export default Tasks;
