import {Link} from "react-router";
import './Menu.css'


export const Menu=()=>{
    return(
        <ul>
            <li><Link to={'/users/jsonplaceholder'}>usersJsonplaceholder</Link></li>
            <li><Link to={'/users/dummyjson'}>usersDummyjson</Link></li>
            <li><Link to={'/posts/jsonplaceholder'}>PostsJsonplaceholder</Link></li>
            <li><Link to={'/posts/dummyjson'}>PostsDummyjson</Link></li>
            <li><Link to={'/comments/jsonplaceholder'}>CommentsJsonplaceholder</Link></li>
        </ul>
    )
};

