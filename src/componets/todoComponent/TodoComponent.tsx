import './TodoComponents.css'
import type {FC} from "react";
import {type ToDos} from "../../models/ToDos.ts";

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