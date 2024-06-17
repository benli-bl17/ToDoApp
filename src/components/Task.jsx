import { useEffect, useState } from "react";

function Task({ task, onDeleteTask, onToggleTask, onUpdateTask }) {
  const [editMode, setEditMode] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);
  const handleTaskNameChange = (e) => {
    setNewTaskName(e.target.value);
  };
  const handleTaskNameUpdate = () => {
    console.log(task.id, newTaskName);
    onUpdateTask(newTaskName, task.id);
    setEditMode(false);
    console.log(task);
  };
  useEffect(() => {
    setNewTaskName(task.name);
  }, [task]);

  return (
    <li className="task">
      {editMode ? (
        <>
          <label className="task-label">
            <input
              className="task-input"
              type="text"
              value={newTaskName}
              onChange={handleTaskNameChange}
              onBlur={handleTaskNameUpdate}
            />
            <button
              className="task-btn update-btn"
              onClick={handleTaskNameUpdate}
            >
              ✅
            </button>
          </label>

          <button
            className="task-btn delete-btn"
            onClick={() => onDeleteTask(task.id)}
          >
            ❌
          </button>
        </>
      ) : (
        <>
          <label className="task-label">
            <input
              className="task-checkbox"
              onChange={() => onToggleTask(task.id)}
              checked={task.checked}
              type="checkbox"
            />
            {task.name}
          </label>
          <button
            className="task-btn edit-btn"
            onClick={() => setEditMode(true)}
          >
            ✏️
          </button>
          <button
            className="task-btn delete-btn"
            onClick={() => onDeleteTask(task.id)}
          >
            ❌
          </button>
        </>
      )}
    </li>
  );
}

export default Task;
