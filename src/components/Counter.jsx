function Counter({ numberOfTaskChecked, totalNumberOfTasks }) {
  return (
    <div>
      <b>{numberOfTaskChecked}</b> / {totalNumberOfTasks} tasks done
    </div>
  );
}

export default Counter;
