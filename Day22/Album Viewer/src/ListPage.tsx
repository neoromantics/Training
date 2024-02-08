import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export interface Todo {
  fakeProperty: string;
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const ListPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Todo[] = await response.json();
        setTodos(data);
      } catch (error) {
        setError("Failed to fetch todos");
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {todos.slice(0, 10).map((todo) => (
          <li key={todo.id}>
            <div>
              <NavLink to={`/photo/${todo.id}`}>
                {todo.id}: {todo.title}
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
