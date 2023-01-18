import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTodo } from "../services/todo-api";
import Todo from "./Todo";

const ViewToDoPage = () => {
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
   
    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <Todo element={todo} />
    );
}

export default ViewToDoPage;

