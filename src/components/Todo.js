import { deleteTodo } from '../services/todo-api'
import { Link, useNavigate } from 'react-router-dom'











export default function Todo({ element }) {
  const nav = useNavigate()


  const deleteTheTodo = async () => {
    try {
      await deleteTodo(element._id); // service in todos-api
      nav('/'); // take us back to home screen
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="todoItem">
      <Link to={`/view-todo/${element._id}`}>{element.description}</Link>
      <input type='checkbox' defaultChecked={element.complete} />
      <br />
      <Link to={`/edit-todo/${element._id}`}>Edit</Link>
      <button onClick={deleteTheTodo}>Delete</button>
    </div>
  );
}
