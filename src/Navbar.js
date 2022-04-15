import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className='head'>
      <div className='navb'>

        
        <Link to="/" className='home'>STYLES<br/>CONFERENCE</Link>



       <div className='aug'>
        
                        <h3>August 24-26th — Chicago, IL</h3>

                        <ul>
                          <Link to='/' className='lin'>HOME</Link> 
                          <Link to='/Speak' className='lin'>SPEAKERS</Link> 
                          <Link to='/Schedule' className='lin'>SCHEDULE</Link> 
                          <Link to='/Venue' className='lin'>VENUE</Link> 
                          <Link to='/Register' className='lin'>REGISTER</Link> 
                        </ul>


      </div>

       


    </div> 
    </div>
  )
}

export default Navbar