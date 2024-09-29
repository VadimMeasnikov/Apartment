import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

export default function navbar() {
    return (
        <div className="navbar">
            <nav id='nav_side'>
                <NavLink   className='nav_link' to='/'>
                    <div className='elipse_link_1'><div className="elipse_link_2"></div></div>
                </NavLink>
                <NavLink  className='nav_link' to='/screen2'>
                    <div className='elipse_link_1'><div className="elipse_link_2"></div></div>
                </NavLink>
                <NavLink className='nav_link' to='/selection'>
                    <div className='elipse_link_1'><div className="elipse_link_2"></div></div>
                </NavLink>
                <NavLink className='nav_link' to='*'>
                    <div className='elipse_link_1'><div className="elipse_link_2"></div></div>
                </NavLink>
                <NavLink className='nav_link' to='*'>
                    <div className='elipse_link_1'><div className="elipse_link_2"></div></div>
                </NavLink>
            </nav>
        </div>

    )
}
