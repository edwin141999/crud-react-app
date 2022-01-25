import { NavLink } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className="nav" to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav" to='/createTask'>Create Task</NavLink>
                </li>
                <li>
                    <NavLink className="nav" to='/listTasks'>List Tasks</NavLink>
                </li>
            </ul>
        </div>);
}

export default Navbar;