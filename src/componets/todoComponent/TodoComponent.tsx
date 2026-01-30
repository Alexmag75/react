import './TodoComponents.css'
import {FC} from "react";
import {ToDos} from "../../models/ToDos.ts";

type PropType = {
    todo:ToDos
}
export const TodoComponent:FC<PropType> = ({todo}) => {
    return (
        <>
            {todo.id}
            {todo.title}
            {todo.userId}
            {todo.completed}
        </>
    );
};