import React from 'react';

function Task({ task, onToggle }) {
  return (
    <li
      onClick={onToggle}
      style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
    >
      {task.text}
    </li>
  );
}

export default Task;