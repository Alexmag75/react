import {Link} from "react-router";
import './Menu.css'


export const Menu=()=>{
    return(
        <ul>
            <li><Link to={'/users'}>users</Link></li>
            <li><Link to={'/posts'}>posts</Link></li>
        </ul>
    )
};
