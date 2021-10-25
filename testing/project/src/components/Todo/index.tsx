import { useState } from "react";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTodos((prev) => [...prev, input]);
          setInput("");
        }}
      >
        <input
          placeholder="Type your todo"
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
