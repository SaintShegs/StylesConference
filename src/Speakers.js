import React from 'react'
import worl from './Images/speakers.jpg'
import ven from './Images/venue.jpg'
import chicago from './Images/schedule.jpg'
import { Link } from 'react-router-dom'

const Speakers = () => {
  return (
    <div className='speak'>

        <section className='world'>
            <p>SPEAKERS</p>
            <img className='images' src={worl} alt="speaker"></img>
            <Link className='chick'>World-Class Speakers</Link>
            <p>Joining us from all around the world are over twenty fantastic speakers, here to share their stories.</p>
        </section>





        <section className='world'>
        <p>SCHEDULE</p>
        <img className='images' src={chicago} alt="audience"></img>
        <Link className='chick'>Three Inspiring Days</Link>
        <p>Enjoy three inspiring and action-packed days of tals, gatherings, and all-around good times.</p>




        </section>










        <section className='world'>
        <p>VENUE</p>
        <img className='images' src={ven} alt="chicago"></img>
        <Link className='chick'>The Chicago Theater</Link>
        <p>Within the heart of downtown Chicago, The Chicago Theatre will provide a beautiful conference venue.</p>




        </section>






    </div>
  )
}

export default Speakers