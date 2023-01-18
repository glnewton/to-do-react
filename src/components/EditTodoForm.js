import { getTodo, editTodo } from '../services/todo-api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EditTodoForm = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTodo(id)
            .then(response => {
                console.log(response)
                setTodo(response);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [id]);

    const editTheTodo = (event) => {
        event.preventDefault();
        const updatedTodo = {
            description: event.target.description.value,
            complete: event.target.complete.checked
        }
        editTodo(id, updatedTodo)
            .then(response => {
                console.log(response);
                nav(`/view-todo/${id}`);
            })
            .catch(error => console.log(error));
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h3>Edit Your Todo</h3>
            <form onSubmit={editTheTodo}>
                <p>Description: <input type="text" name="description" defaultValue={todo.description}></input></p>
                <p>Complete: <input type='checkbox' name='complete' defaultChecked={todo.complete}/> </p>
                <input type="submit" value="Edit"></input>
            </form>
        </>
    )
}

export default EditTodoForm
