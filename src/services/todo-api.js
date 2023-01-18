
const baseURL = "http://localhost:3001/todos/"

//Works
const getTodos = async () => {
    try {
        const URL = `${baseURL}`
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return await response.json();
        } else {
            throw new Error("Response is not JSON");
        }
    }
    catch (error) {
        console.error(error)
    }
}
//Works
const getTodo = async (id) => {
    try {
        const URL = `${baseURL}${id}`
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
//Works
const deleteTodo = async (id) => {
    try {
        const URL = `${baseURL}${id}`;
        const response = await fetch(URL, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    } catch (error) {
        console.error(error);
    }
}
//Works
const editTodo = async (id, updatedTodo) => {
    try {
        const URL = `${baseURL}${id}`;
        const response = await fetch(URL, {
            method: 'PUT',
            body: JSON.stringify(updatedTodo),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    } catch (error) {
        console.error(error);
    }
}
//Works
const createTodo = async (todo) => {
    try {
        const URL = `${baseURL}`
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }
    catch (error) {
        console.error(error)
    }
}

export { createTodo, getTodos, getTodo, editTodo, deleteTodo }





