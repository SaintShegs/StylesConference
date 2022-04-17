import React from 'react'


const Venue = () => {

  return (
    
    <div>
    
        <section className='rowalt'>

                
            <h2>Venue</h2>

            <p>The conference is held at The Chicago Theatre, a beautiful historical landmark. The conference hotel, Four Seasons, is a short walk away down State Street.</p>

        </section>

        <div className='chicago'>

          <section className='chic'>
            <h2>Chicago Theatre</h2>
            <p>175 N State St <br /> Chicago, IL 60601</p>
            <a href="thechicagotheatre.com">thechicagotheatre.com</a>
            <p>(312) 462-6300</p>

          </section>
            

          <section className='sea'>
            <h2>Four Seasons</h2>
            <p>120 E Delaware PI <br /> Chicago, IL 60611</p>
            <a href="fourseasons.com">fourseasons.com</a>
            <p>(312) 280-8800</p>
          </section>
        </div>






    </div>
  )
}


export default Venue