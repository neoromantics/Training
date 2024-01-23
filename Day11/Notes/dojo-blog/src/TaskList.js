import React from "react";
import Task from "./Task";

function TaskList({ tasks, onToggleTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onToggle={() => onToggleTask(index)} />
      ))}
    </ul>
  );
}

export default TaskList;
