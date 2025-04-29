import { Link, Outlet } from "react-router-dom";

function Navigation(){
    return(
        <>
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to="/home" >Home</Link>
                </li>
                <li>
                    <Link to="/aim" >Aim and Scope</Link>
                </li>
                <li>
                    <Link to="/editorial" >Editorial Board</Link>
                </li>
                <li>
                    <Link to="/archive" >Archive</Link>
                </li>
                <li>
                    <Link to="/faq" >Faq</Link>
                </li>
                <li>
                    <Link to="/contact" >Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}
export default Navigation;