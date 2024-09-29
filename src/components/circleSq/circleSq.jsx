import React, { useEffect, useRef, useState } from 'react'
import './circle_sq.scss'

export default function circleSq() {
    //in radian
    const [styleCl, setStyleCl] = useState(null)
    const [unitName, setUnitName] = useState('circle_unit_point_90')
    const [unitSquare, setUnitSquare] = useState(64)
    const circleUnitRef = useRef(null);
    const circlePoint = useRef(null);
    const angle = 90

    useEffect(() => {
        if (angle <= 90) {
            setUnitName('circle_unit_point_90')
            setUnitSquare(64)
        }
        else if(angle > 90 && angle < 100){
            setUnitName('circle_unit_point_100')
        }
    }, [angle])

    return (
        <div id="circle_container">
            <h2 id='circle_sq_text'>{unitSquare}</h2>
            <div id="circle_unit" ref={circleUnitRef}>
                <div id="circle_unit_line">
                    <div id="circle_unit_line_ch"></div>
                </div>
                <div id="circle_unit_start"><p id='circle_unit_start_text'>m<sup>2</sup></p></div>
                <div id="circle_unit_point_container"><div ref={circlePoint} style={{ styleCl }} id={`${unitName}`}></div></div>
            </div>
        </div>

    )
}
