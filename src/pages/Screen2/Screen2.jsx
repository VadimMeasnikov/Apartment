import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import HeaderComponent from '../../components/headerComponent/headerComponent'
import TextBorder from '../../components/textBorder/textBorder'
// import arrow from '../../i'
import { Link, NavLink } from 'react-router-dom'
import './screen2.scss'

export default function screen2() {
  return (
    <div className='screen_2'>
      <aside className='screen2_aside_sidebar'>
        <Sidebar />
      </aside>
      <div className='screen_2__content'>
        <header className='screen_2__header'><HeaderComponent /></header>
        <main id='screen_2__main'>
          <div className="screen_2__container">
            <NavLink to='*' className='screen_2_content' id='screen_2__content_1'>
              <div className="link_content_screen2">
                <div className="content_container">
                  <div className="content_1_name">
                    <h2 className='name_text'>Vip</h2>
                  </div>
                  <div className="content_2_info">
                     <span className='info_text'><p>THE VIP STYLE INCLUDES AN EXTENDED SET OF WORKS. SUITABLE FOR THOSE WHO WANTS TO GET THE PERFECT RESULT.</p></span>
                     <Link to='*'><p>Gallery</p> <img src="" alt="" /></Link>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to='*' className='screen_2_content' id='screen_2__content_2'><TextBorder text={'vip'} /></NavLink>
            <NavLink to='*' className='screen_2_content' id='screen_2__content_3'><TextBorder text={'extra'} /></NavLink>
          </div>
        </main>
      </div>
      <aside className='screen2_aside_navbar'>
        <Navbar />
      </aside>
    </div>
  )
}
