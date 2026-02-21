import {Link} from "react-router";
import './Menu.css'

export const Menu=()=>{
    return (
        <>
            <ul>
                <li><Link className="my-link" to={'/cars'}>Cars</Link></li>
                <li><Link className="my-link" to={'/cars/create'}>CarsAdd</Link></li>
            </ul>

        </>
    )
}