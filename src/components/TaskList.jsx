import Select from "react-select";
import Task from "./Task";
import EmptyView from "./EmptyView";
import { useContext, useMemo, useState } from "react";
import { TasksContext } from "../contexts/TasksContextProvider";

function TaskList() {
  const { tasks, handleDeleteTask, handleToggleTask, handleUpdateTask } =
    useContext(TasksContext);
  const options = [
    { value: "default", label: "Sort by default" },
    { value: "checked", label: "Sort by complete" },
    { value: "unchecked", label: "Sort by incomplete" },
  ];

  const [sortBy, setSortBy] = useState(options[0]);

  const sortedTasks = useMemo(
    () =>
      [...tasks].sort((a, b) => {
        if (sortBy === "checked") {
          return a.checked - b.checked;
        }
        if (sortBy === "unchecked") {
          return b.checked - a.checked;
        }
        return 0; // Default behavior if sortBy is neither "checked" nor "unchecked"
      }),
    [tasks, sortBy]
  );

  return (
    <ul className="task-list">
      {tasks.length === 0 ? <EmptyView /> : null}
      {tasks.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={options[0]}
            options={options}
          />
        </section>
      ) : null}
      {sortedTasks.map((task) => {
        return (
          <Task
            onUpdateTask={handleUpdateTask}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
            key={task.id}
            task={task}
          ></Task>
        );
      })}
    </ul>
  );
}

export default TaskList;
