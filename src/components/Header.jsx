import Logo from "./Logo";
import Counter from "./Counter";
import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContextProvider";

function Header() {
  const { tasks } = useContext(TasksContext);
  const totalNumberOfTasks = tasks.length;
  const numberOfTaskChecked = tasks.filter((task) => task.checked).length;

  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfTasks={totalNumberOfTasks}
        numberOfTaskChecked={numberOfTaskChecked}
      />
    </header>
  );
}

export default Header;
