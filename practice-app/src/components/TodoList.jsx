import { FaTasks } from "react-icons/fa";

function TodoList() {
  const todos = [
    { id: 1, task: "Learn React Basics" },
    { id: 2, task: "Practice Components" },
    { id: 3, task: "Build Mini Project" },
  ];

  return (
    <div className="card">
      <h2><FaTasks style={{ marginRight: "10px" }} />Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>✅ {todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;