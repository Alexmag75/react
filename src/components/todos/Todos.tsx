import {useEffect, useState} from "react";
import {loadTodos} from "../../cervices/api.service.ts";
import type {TodosModel} from "../../modeles/TodosModel.ts";
import {Todo} from "../todo/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<TodosModel[]>([])
    useEffect(() => {
        loadTodos().then(value => setTodos(value));
    }, []);
    return (
        <div >
            {
                todos.map(todo=><Todo todo={todo} key={todo.id}/>)
}
    </div>
);
};
