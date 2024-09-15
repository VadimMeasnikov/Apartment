import React from 'react'
import arrow from '../../images/arrow.png'
import './contactForm.scss'

export default function contactForm() {
  return (
    <div>
      <form>
        <input id='f_i__top' className='form_input' type="text" placeholder='Your name' />
        <input className='form_input' type="tel" placeholder='Your phone number' />
        <button className='form_btn' type='submit'>
          <p>discuss a project</p>
          <img src={arrow} alt="" />
        </button>
      </form>
    </div>

  )
}
