import React from 'react'
import './textBorder.scss'

export default function textBorder({text}) {
  return (

    <div class="text_border">
      <span class="start finish">{text}</span>
    </div>


  )
}
