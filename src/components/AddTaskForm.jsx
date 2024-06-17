import { useState } from "react";
import Button from "./Button";

function AddTaskForm({ handleAddTask }) {
  const [taskText, setTaskText] = useState("");
  const handleTaskInput = (e) => {
    setTaskText(e.target.value);
  };
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      handleAddTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleTaskSubmit}>
      <h2>Add a task</h2>
      <input
        type="text"
        value={taskText}
        onChange={handleTaskInput}
        placeholder="Add your task"
      />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddTaskForm;
