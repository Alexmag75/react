import './TodosComponents.css'
import {useEffect, useState} from "react";
import {ToDos} from "../../models/ToDos.ts";
import {loadTodos} from "../../service/api.service.ts";
import {TodoComponent} from "../todoComponent/TodoComponent.tsx";

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