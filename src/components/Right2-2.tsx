import {useContext} from "react";
import {Context} from "../context/MyContext.tsx";
import './Left2-2.css'
export const Right22=()=>{
    const {changeTheme} = useContext(Context)
    const handlerD = () => {
        changeTheme('dark');
    };
    const handlerL = () => {
        changeTheme('light');
    };
    return(
        <>
        <div>

            <button onClick={handlerD}>change theme dark</button>
            <button onClick={handlerL}>change theme light</button>
        </div>
        </>
    )
}