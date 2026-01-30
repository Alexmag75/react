import './TodosComponents.css'
import {useEffect, useState} from "react";
import {loadTodos} from "../../service/api.service.ts";
import {TodoComponent} from "../todoComponent/TodoComponent.tsx";
import type {ToDos} from "../../models/ToDos.ts";

export const TodosComponents = () => {
    const [toDos, setToDos] = useState<ToDos[]>([])
    useEffect(() => {
        loadTodos().then(value => setToDos(value));
    }, []);
    return (
        <div >
            {
                toDos.map(todo=><TodoComponent todo={todo} key={todo.id}/>)

            }

        </div>

    );
};