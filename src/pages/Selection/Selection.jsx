import React from 'react'

import HeaderComponent from '../../components/headerComponent/headerComponent'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import ContactForm from '../../components/contactForm/contactForm'
import CircleSq from '../../components/circleSq/circleSq'

import './selection.scss'


export default function Selection() {
    return (
        <div id='selection'>
            <aside className='sl_aside' id='sl_sidebar'><Sidebar /></aside>
            <main>
                <header id='sl_header'>
                    <HeaderComponent />
                </header>
                <div id="sl_content">
                    <div id="sl_content_container">
                        <div id="sl_content_slogan"><h1 id='sl_slogan'>Select an area size &
                            one of the service packages:</h1></div>

                        <div id="sl_content_info">
                            <div id="sl_circle"><CircleSq/></div>
                            <div className="sl_selection">1</div>
                            <div id="sl_price">1</div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </main>
            <aside className='sl_aside' id='sl_navbar'><Navbar /></aside>
        </div>
    )
}
