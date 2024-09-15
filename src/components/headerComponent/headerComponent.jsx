import React from 'react'
import menu from '../../images/burger-menu.png'
import phone from '../../images/at_phone.svg'
import './headerComponent.scss'


export default function headerComponent() {
   return (
      <div className='header_container'>
       
         <nav>
            <button className='burger_menu'>
               <img src={menu} alt="burger-menu" />
            </button>

            <span className='contact_box'>
               <h2 className='contact_number'>+00 (000) 000 00 00</h2>
            </span>

            <button className='call_btn'>
               <h2>Request for a call</h2>

               <div className='hover_btn_call'>
                  <div className='elipse_1'>
                     <div className='elipse_2'>
                        <div className="elipse_3">
                           <img src={phone} alt="phone" />
                        </div>
                     </div>
                  </div>

               </div>
            </button>
         </nav>
      </div>
   )
}
