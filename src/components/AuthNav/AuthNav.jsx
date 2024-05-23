import { NavLink } from "react-router-dom";
import style from "../AuthNav/AuthNav.module.css"

export default function AuthNav() {

    return (
        <div>
            <nav className={style.authNavigation}>
                <NavLink to="/register"> Register</NavLink>
                <NavLink to="/login"> Log In </NavLink>
            </nav>
        </div>
        
    )
}