import TodoItem from "./todo-item";

function TodoList(props) {
  const { list, onDelete, onChecked } = props;
  return (
    <ul className="list-group">
      {/* <TodoItem name="Task 1" isCompleted={true} />
      <TodoItem name="Task 2" isCompleted={false} />
      <TodoItem name="Task 3" isCompleted={false} /> */}
      {list.map((item, index) => {
        const { name, id, isCompleted } = item;
        return (
          <TodoItem
            key={id}
            id={id}
            name={name}
            isCompleted={isCompleted}
            onDelete={onDelete}
            onChecked={onChecked}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
