import { useState } from "react";
import TodoList from "./components/todo-list";
import AddTodoForm from "./components/add-todo-form";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Task 1",
      isCompleted: false,
    },
    {
      id: 2,
      name: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      name: "Task 3",
      isCompleted: false,
    },
  ]);
  return (
    <div>
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <TodoList list={list} />
          <div className="mt-4">
            <AddTodoForm
              onAddNew={(newvalue) => {
                setList([
                  ...list,
                  {
                    id: Math.random(),
                    name: newvalue,
                    isCompleted: false,
                  },
                ]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
