import React from 'react'
import HeaderComponent from '../../components/headerComponent/headerComponent';
import ContactForm from '../../components/contactForm/contactForm';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import d_line from '../../images/d_line.png'
import './home.scss'



export default function Home() {
    return (
        <div className="home_page">
            <section id='home_container'>

                <Sidebar />
                <main>
                    <header><HeaderComponent /></header>
                    <section id='main_content'>
                        <div className="main_top">
                            <div className="main_text">
                                <span className='main_text_content'>
                                    <div className='d_line_container'>
                                        <div className="d_line_box_1">
                                            <img src={d_line} id='d_line__1' className='d_line'></img>
                                        </div>
                                        <div className="d_line_box_2">
                                            <img src={d_line} id='d_line__2' className='d_line'></img>
                                        </div>
                                    </div>

                                    <span className='home_text_container'>
                                        <span className='text_content_1'>dream</span>
                                        <span className='text_content_2'>your personal</span>
                                        <span className='text_content_3'>house</span>
                                    </span>
                                </span>
                            </div>
                            <Navbar/>
                        </div>
                        <div className="main_bottom">
                            <div className="main_bottom_container">
                                <ContactForm/>
                            </div>
                        </div>
                        {/* <div className="main_top">
                            <div className="main_text">
                                <div className="main_text_container">
                                    <div className='d_line_container'>
                                        <div className="d_line_box_1">
                                            <img src={d_line} id='d_line__1' className='d_line'></img>
                                        </div>
                                        <div className="d_line_box_2">
                                            <img src={d_line} id='d_line__2' className='d_line'></img>
                                        </div>
                                    </div>

                                    <span className='home_text_container'>
                                        <span className='text_content_1'>dream</span>
                                        <span className='text_content_2'>your personal</span>
                                        <span className='text_content_3'>house</span>
                                    </span>
                                </div>
                            </div> */}

                        {/* <Navbar /> */}
                        {/* </div> */}

                        {/* <ContactForm /> */}
                    </section>

                </main>
            </section>
        </div>
    )
}
