import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='foot'>

        <p>© Styles Conference</p>


        <ul>
           <Link to='/' className='footerlink'>Home</Link> 
           <Link to='/Speak' className='footerlink'>Speakers</Link> 
           <Link to='/Schedule' className='footerlink'>Schedule</Link> 
           <Link to='/Venue' className='footerlink'>Venue</Link> 
           <Link to='/Register' className='footerlink'>Register</Link> 
        </ul>


        
    </div>
  )
}

export default Footer