import { deleteTodo, editTodo } from '../services/todo-api'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Todo({ element }) {
  const [todo, setTodo] = useState(element);
  const nav = useNavigate()

  useEffect(() => {
    setTodo(element);
  }, [element]);

  const deleteTheTodo = async () => {
    try {
      await deleteTodo(element._id); // service in todos-api
      nav('/'); // take us back to home screen
    } catch (error) {
      console.log(error);
    }
  }

  const handleCheckboxChange = async (event) => {
    try {
      // update the todo's completed status
      const updatedTodo = { ...element, complete: event.target.checked };
      console.log("Updated todo", updatedTodo)
      // send the update request to the API
      await editTodo(updatedTodo._id, updatedTodo)
            .then(response => console.log(response))
            .catch(error => console.log(error))
      // update the todos in state and re-render the list
      // update the todo in state and re-render the list
      // setTodo(updatedTodo)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={`todoItem ${element.complete ? 'completed' : 'not-completed'}`}>
      <Link to={`/view-todo/${element._id}`}>{element.description}</Link>
      <input 
        type='checkbox' 
        defaultChecked={element.complete} 
        onChange={handleCheckboxChange}
        />
      <br />
      <Link to={`/edit-todo/${element._id}`}>Edit</Link>
      <button onClick={deleteTheTodo}>Delete</button>
    </div>
  );
}


