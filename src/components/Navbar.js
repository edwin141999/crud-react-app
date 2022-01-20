import { NavLink } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ""} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ""} to='/createTask'>Create Task</NavLink>
                </li>
                {/* <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ""} to='/updateTask'>Update Task</NavLink>
                </li> */}
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ""} to='/listTasks'>List Tasks</NavLink>
                </li>
            </ul>
        </div>);
}

export default Navbar;