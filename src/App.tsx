import './App.css'
import {useApi} from "./hooks/useApi.tsx";
function App() {
  const users=useApi<{id:number, name:string}[]>('https://jsonplaceholder.typicode.com/users')

    return (
    <>
        { users&&
            users.map((user:{id:number, name:string})=>(
                <div key={user.id}>
                    {user.id} {user.name}
                </div>
            ))
        }
    </>
  )
}
export default App
