import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import apartmentJSON from '../../apartment.json'
import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import HeaderComponent from '../../components/headerComponent/headerComponent'
import TextBorder from '../../components/textBorder/textBorder'
import arrow from '../../images/arrow.png'
import arrow_2 from '../../images/arrow_2.png'
import './screen2.scss'


export default function screen2() {
  const [activeNav, setActiveNav] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false);
  const [apartment, setApartment] = useState(apartmentJSON)
  // console.log(apartment);

  const handleCardOpen = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };

  const handleNavClick = (index) => {
    setActiveNav(index)
  }

  return (
    <div className='screen_2'>
      <aside className='screen2_aside_sidebar'>
        <Sidebar />
      </aside>
      <div className='screen_2__content'>
        <header className='screen_2__header'><HeaderComponent /></header>
        <main id='screen_2__main'>
          <div className="screen_2__container">
            <div
              to='*'
              className={activeNav === 1 ? 'screen_2_content_active elite_box_active' : 'screen_2_content elite_box'}
              style={{ width: activeNav === 1 ? '70vw' : '30vw' }}
              onClick={() => { handleNavClick(1); handleCardOpen() }}
              id='screen_2__content_1'>

              <div className='stage_1_content'><TextBorder text={'elite'} /></div>
              <div className='stage_2_content'>
                <div className="stage_2_content_container">
                  <div className="stage_2_content_info_box">
                    <div id='circle_box'  >
                      <h2>elite</h2>
                    </div>
                    <div className="info_box">
                      <span className='info_box_content'>THE ELITE STYLE INCLUDES AN EXTENDED SET OF WORKS. SUITABLE FOR THOSE WHO WANTS TO GET THE PERFECT RESULT.</span>
                      <nav id='info_box_links'>
                        <Link className='link_1_ibc'>Gallery <img src={arrow} alt="arrow" /></Link>
                        <Link className='link_2_ibc'>list of services <img src={arrow_2} alt="arrow" /></Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>


            </div>


            <div
              to='*'
              id='screen_2__content_2'
              className={activeNav === 2 ? 'screen_2_content_active vip_box_active' : 'screen_2_content vip_box'}
              style={{ width: activeNav === 2 ? '70vw' : '30vw' }}
              onClick={() => { handleNavClick(2); handleCardOpen() }}>
              <div className='stage_1_content'><TextBorder text={'vip'} /></div>
              <div className='stage_2_content'>
                <div className="stage_2_content_container">
                  <div className="stage_2_content_info_box">
                    <div id='circle_box'  >
                      <h2>vip</h2>
                    </div>
                    <div className="info_box">
                      <span className='info_box_content'>THE VIP STYLE INCLUDES AN EXTENDED SET OF WORKS. SUITABLE FOR THOSE WHO WANTS TO GET THE PERFECT RESULT.</span>
                      <nav id='info_box_links'>
                        <Link to={`/apartment/${apartment[1].id}`} className='link_1_ibc'>Gallery <img src={arrow} alt="arrow" /></Link>
                        <Link className='link_2_ibc'>list of services <img src={arrow_2} alt="arrow" /></Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            <div
              to='*'
              className={activeNav === 3 ? 'screen_2_content_active extra_box_active' : 'screen_2_content extra_box'}
              id='screen_2__content_3'
              style={{ width: activeNav === 3 ? '70vw' : '30vw' }}
              onClick={() => handleNavClick(3)}>

              <div className='stage_1_content'><TextBorder text={'extra'} /></div>
              <div className='stage_2_content'>
                <div className="stage_2_content_container">
                  <div className="stage_2_content_info_box">
                    <div id='circle_box'  >
                      <h2>extra</h2>
                    </div>
                    <div className="info_box">
                      <span className='info_box_content'>THE EXTRA STYLE INCLUDES AN EXTENDED SET OF WORKS. SUITABLE FOR THOSE WHO WANTS TO GET THE PERFECT RESULT.</span>
                      <nav id='info_box_links'>
                        <Link className='link_1_ibc'>Gallery <img src={arrow} alt="arrow" /></Link>
                        <Link className='link_2_ibc'>list of services <img src={arrow_2} alt="arrow" /></Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </main>
      </div>
      <aside className='screen2_aside_navbar'>
        <Navbar />
      </aside>
    </div>
  )
}
