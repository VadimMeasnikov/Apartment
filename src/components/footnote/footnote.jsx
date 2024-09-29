import React, { useRef, useState } from 'react'

import './footnote.scss'

export default function footnote({ content, position }) {
  const {top, bottom, left, right,  transform} = position
  const [isVis, setIsVis] = useState(false)
  const [isContent, setIsContent] = useState(false)

  const containerStyle = {
    position: 'absolute',
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    transform:  transform
  };

  const handleMouseEnter = () => {
    setIsVis(true)
    setTimeout(() => {
      setIsContent(true)
    }, 500);
  };

  const handleMouseLeave = () => {
    setIsVis(false)
    setTimeout(() => {
      setIsContent(false)
    }, 500);
  };

  return (
    <div className="footnote_container" style={containerStyle}>
      <div
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        className="footnote_1">
  
        <div className="footnote_2">
          <div className="footnote_3"></div>
          <div className="line_hover"></div>
        </div>

      </div>
      <div className="footnote_side_container">
        <p className={isContent ? 'footnote_side_container_content_active' : 'footnote_side_container_content'}>{content}</p>
        <div className={isVis ? 'footnote_side_active' : 'footnote_side'}>
          <div className={isVis ? 'line_g_hover_active' : 'line_g_hover'}></div>
        </div>
      </div>
    </div>


  )
}
