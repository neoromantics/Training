import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Filter from "./Filter";
import "./App.css";

// App Component
function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  function addTask(task) {
    setTasks([...tasks, { text: task, isCompleted: false }]);
  }

  function toggleTaskCompletion(index) {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  }

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.isCompleted;
    } else if (filter === "active") {
      return !task.isCompleted;
    }
    return true;
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={filteredTasks} onToggleTask={toggleTaskCompletion} />
      <Filter onFilterChange={handleFilterChange} />
    </div>
  );
}

export default App;
