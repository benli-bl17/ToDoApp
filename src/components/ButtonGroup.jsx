import { useContext } from "react";
import Button from "./Button";
import { TasksContext } from "../contexts/TasksContextProvider";

function ButtonGroup() {
  const {
    handleRemoveAllTasks,
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
  } = useContext(TasksContext);
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType={"secondary"}>
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType={"secondary"}>
        Mark all as incomplete
      </Button>
      <Button onClick={handleRemoveAllTasks} buttonType={"secondary"}>
        Remove all tasks
      </Button>
    </section>
  );
}

export default ButtonGroup;
