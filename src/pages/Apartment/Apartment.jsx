import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import apartmentJSON from '../../apartment.json'
import {propertiesArr} from './Properties.js'
import useGetCurrentItem from '../../Hooks/useGetCurrentItem'

import HeaderComponent from '../../components/headerComponent/headerComponent'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import ContactForm from '../../components/contactForm/contactForm'
import Slider from '../../components/slider/slider'
import Footnote from '../../components/footnote/footnote'

import arrow_2 from '../../images/arrow_2.png'

import './apartment.scss'


export default function Apartment() {
    const [count, setCount] = useState(1)
    const [arrIndex, setArrIndex] = useState(0)
    const [prevCount, setPrevCount] = useState(0)
    const [apartment, setApartment] = useState(apartmentJSON)
    const [properties, setProperties] = useState(propertiesArr)

    const { id } = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {
        console.log(arrIndex);

    }, [arrIndex])


    const apartmentType = useGetCurrentItem(apartment, id)

    function nextSl() {
        if (count !== properties.length) {
            setArrIndex(pr => pr + 1)
            setCount(pr => pr + 1)
            setPrevCount(pr => pr + 1)
        }
        else {
            return
        }
    }
    function prevSl() {
        if (arrIndex !== 0) {
            setCount(pr => pr - 1)
            setPrevCount(pr => pr - 1)
            setArrIndex(pr => pr - 1)
        } else if (arrIndex == 0) {
            setCount(1)
            setPrevCount(0)
            return
        }
    }


    return (
        <div id='apartment'>
            <aside className='ap_aside' id='ap_sidebar'><Sidebar /></aside>
            <div id='ap_content'>
                <header id='ap_header'><HeaderComponent /></header>
                <main id='ap_main'>
                    <div id="ap_main_container">
                        <nav id='ap_nav'><Link onClick={() => navigate(-1)} id='ap_link'><p>Back to styles</p> <img src={arrow_2} alt="arrow" /></Link></nav>
                        <div id="ap_main_content">

                            {
                                properties[arrIndex].map((item, index) => (
                                    <Footnote key={index} content={item.content} position={item.position} />
                                ))
                            }


                        </div>
                        <div id="ap_funct_content">
                            <div id="ap_slider"> <Slider count={count} prevCount={prevCount} prevSl={prevSl} nextSl={nextSl} /></div>
                            <div id="ap_form"><ContactForm /></div>
                        </div>
                    </div>
                </main>
            </div>
            <aside className='ap_aside' id='ap_navbar'><Navbar /></aside>
        </div>
    )
}
