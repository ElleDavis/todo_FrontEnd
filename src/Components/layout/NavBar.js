import { Link, NavLink} from "react-router-dom"

const NavBar = ()=> {
    return(
        <ul>
            <li>
                <Link to="/home"> home</Link>
            </li>
            <li>
                <NavLink to="/about">about</NavLink>
            </li>
            <li>
            <NavLink to="/Landing">Landing</NavLink>
            </li>
        </ul>
    )
}
export default NavBar