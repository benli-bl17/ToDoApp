import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext();

function TasksContextProvider({ children }) {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(savedTasks || []);

  const handleAddTask = (newTaskText) => {
    const timestamp = Date.now();
    const newTask = {
      id: timestamp,
      name: newTaskText,
      checked: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };
  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleToggleTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setTasks(newTasks);
  };
  const handleUpdateTask = (newTaskText, id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newTaskText };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleRemoveAllTasks = () => {
    setTasks([]);
  };
  const handleMarkAllAsComplete = () => {
    const newTasks = tasks.map((task) => {
      return { ...task, checked: true };
    });
    setTasks(newTasks);
  };
  const handleMarkAllAsIncomplete = () => {
    const newTasks = tasks.map((task) => {
      return { ...task, checked: false };
    });
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleDeleteTask,
        handleToggleTask,
        handleUpdateTask,
        handleRemoveAllTasks,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContextProvider;
