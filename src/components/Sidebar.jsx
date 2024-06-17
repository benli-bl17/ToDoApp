import { useContext } from "react";
import AddTaskForm from "./AddTaskForm";
import ButtonGroup from "./ButtonGroup";
import { TasksContext } from "../contexts/TasksContextProvider";

function SideBar() {
  const { handleAddTask } = useContext(TasksContext);
  return (
    <div className="sidebar">
      <AddTaskForm handleAddTask={handleAddTask} />
      <ButtonGroup />
    </div>
  );
}

export default SideBar;
