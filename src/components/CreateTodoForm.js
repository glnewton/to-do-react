import { createTodo } from '../services/todo-api.js';

const CreateTodoForm = () => {

  const createTheTodo = (event) => {
    const todo = {
      description: event.target.description.value,
      complete: false
    }
    createTodo(todo)
  }

  return (
    <>
      <h3>Add an Item to Your Todo List</h3>
      <form onSubmit={createTheTodo}>
        <p>Description: <input type="text" name="description"></input></p>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  )
}

export default CreateTodoForm
