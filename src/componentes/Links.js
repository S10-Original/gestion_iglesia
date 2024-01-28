import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import '../css/cssPrincipal.css';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


const Links = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return(
        <div>
            <div className="navbar">
                <NavLink to="/" className="menu-bars">
                    <FaBars onClick={showSidebar}/>
                </NavLink>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <NavLink to="#" className='menu-bars'>
                            <AiOutlineClose />
                        </NavLink>

                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Links;