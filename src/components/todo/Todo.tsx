import {type FC} from "react";
import './Todo.css'
import type {TodosModel} from "../../modeles/TodosModel.ts";
type PropType = {
    todo:TodosModel
}
export const Todo:FC<PropType> = ({todo}) => {
    return (
        <>
            <div className='bodyTodo'>
                <h2>{todo.todo}</h2>
                <small>ID задания: {todo.id}</small>
                 <div className='todoCompleted'>
                    <p>Выполнение: {todo.completed.toString()}</p>
                </div>
            </div>

        </>
    );
};
