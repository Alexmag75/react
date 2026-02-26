import {Link} from "react-router";
import './Menu.css'

export const Menu=()=>{
    return(
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/auth/resources'}>Resources</Link></li>
        </ul>
    )
};
