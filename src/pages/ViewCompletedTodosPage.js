import { getTodos } from '../services/todo-api.js'
import { useState, useEffect } from "react";
import Todo from "../components/Todo";

const ViewCompletedTodosPage = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getTodos()
        .then(response => {
          setTodos(response);
          setLoading(false);
        })
        .catch(error => console.log(error))
    }, []);
  
    return (
      <>
        <h1>To Do List</h1>
        {loading ? <p>Loading...</p> :
          todos.filter(todo => todo.complete).map(todo =>
                  <Todo key={todo._id} element={todo} />
              )
        }
      </>
    );
}

export default ViewCompletedTodosPage;