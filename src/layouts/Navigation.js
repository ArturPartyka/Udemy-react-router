import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'


const list = [
    { name: 'start', path: '/', color: "red" },
    { name: 'produkty', path: '/products', color: "blue" },
    { name: 'kontakt', path: '/contact', color: "green" },
    { name: 'panel admina', path: '/admin', color: "yellow" },
]
// const handleClick = () => {
//     console.log("z");
// }

const Navigation = handleClick => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}
                className={({ isActive }) =>
                    isActive ? "active" : ""}
                style={({ isActive }) => ({
                    borderLeft: isActive ? `15px solid ${item.color}` : "none",
                })}
            >{item.name}</NavLink>
        </li >
    ))
    return (
        <nav className='main'>
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;