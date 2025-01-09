import { NavLink } from "react-router-dom";


function header() {
    return (
        <header>
            <ul className="nav nav-pills p-3">                
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Homepage</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Aggiungi una ricetta</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Lista delle ricette</NavLink>
                </li>                
            </ul>
        </header>
    )
};

export default header;