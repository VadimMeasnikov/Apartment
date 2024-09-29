import React from 'react'
import './textBorder.scss'

export default function textBorder({text}) {
  return (

    <div className="text_border">
      <span className="start finish">{text}</span>
    </div>


  )
}
