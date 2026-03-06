import {useContext} from "react";
import {Context} from "../context/MyContext.tsx";

export const Left22=()=>{
    const {theme} = useContext(Context);
    
    return(
        <>
<div className={theme}>

<div className='block'>

</div>
     </div>
        </>
    )
}