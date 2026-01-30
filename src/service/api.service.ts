import type {ToDos} from "../models/ToDos.ts";

const endpoint = import.meta.env.VITE_API_URL+'todos'

const loadTodos=async ()=> {
 const response:ToDos[]= await fetch(endpoint)
     .then(res=>res.json())

    return response;


}
export { loadTodos }
