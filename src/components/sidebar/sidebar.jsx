import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom'
import logo from '../../images/at_logo.svg'
import facebook from '../../images/at_facebook.png'
import inst from '../../images/at_inst.png'
import yt from '../../images/at_yt.png'
import tg from '../../images/at_tg.png'

import './sidebar.scss'

export default function sidebar() {
    const social = [facebook, inst, yt, tg]

    return (
        <section id='sidebar'>
            <NavLink id='logo_link' to='/'><img src={logo} alt="logo" /></NavLink>

            <span className='sidebar_text'> <h2 >apartment renovation</h2></span>

            <div className='line'></div>

            <div className='social_container'>
                {social.map((item, index) =>
                    <div key={uuidv4()} className="social_box">
                        <img src={item} alt="" />
                    </div>
                )}
            </div>
        </section>
    )
}
