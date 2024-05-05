import { useState } from "react";
import { useGetTodoQuery } from "./store/apis";

export const TodoApp = () => {
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1);
    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    };

    const nextTodo = () => {
        setTodoId(todoId + 1);
    };

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

            <pre>
                {JSON.stringify(todo, null, 2)}
            </pre>



            {/* <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <strong>{todo.completed ? 'DONE' : 'Pending'}</strong>
                            {todo.title}
                        </li>
                    ))
                }
            </ul> */}

            <button
                style={{ backgroundColor: 'lightblue', marginRight: 20 }}
                onClick={prevTodo}
            >
                Prev Todo
            </button>

            <button
                style={{ backgroundColor: 'coral' }}
                onClick={nextTodo}
            >
                Next Todo
            </button>
        </>
    );
};