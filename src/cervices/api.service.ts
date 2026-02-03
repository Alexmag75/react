
import type {TodosModel} from "../modeles/TodosModel.ts";
const endpoint = import.meta.env.VITE_API_BASE_URL+'/todos'

const loadTodos=async ():Promise<TodosModel[]>=> {
    const response:{todos:TodosModel[],total:number,skip:number,limit:number} = await fetch(endpoint)
        .then(res=>res.json())
    return response.todos
}
export { loadTodos }
