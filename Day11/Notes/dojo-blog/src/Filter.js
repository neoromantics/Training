import React from "react";

function Filter({ onFilterChange }) {
  return (
    <div>
      <button onClick={() => onFilterChange("all")}>All</button>
      <button onClick={() => onFilterChange("active")}>Active</button>
      <button onClick={() => onFilterChange("completed")}>Completed</button>
    </div>
  );
}

export default Filter;
