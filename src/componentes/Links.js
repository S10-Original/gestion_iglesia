import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import '../css/cssPrincipal.css';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { LinksData } from "./LinksData";
import { IconContext } from "react-icons";


const Links = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return(
        <div>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar">
                    <NavLink className="menu-bars">
                        <FaBars onClick={showSidebar}/>
                    </NavLink>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <NavLink to="/Principal" className='menu-bars'>
                                <AiOutlineClose />
                            </NavLink>

                        </li>
                        {LinksData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <NavLink to={item.path} style={{paddingLeft: 10}}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    );
}

export default Links;