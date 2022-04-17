import React from 'react'
import aaron from './Images/aaron-irizarry.jpg'
import adam from './Images/adam-connor.jpg'
import aj from './Images/aj-self.jpg'
import arman from './Images/arman-ghosh.jpg'
import bermon from './Images/bermon-painter.jpg'
import shay from './Images/shay-howe.jpg'

const Speak = () => {
  return (
    <div>

        <section className='rowalt'>

        
        <h2>Speakers</h2>

        <p>We're happy to welcome over twenty speakers to present on the industry's latest technologies. Prepare for an inspiration extravaganza.</p>

        </section>



        <div className='speakers_section'>
          <section className='speakers'>
              <img src={aaron} alt="" />
              <p className='title'>Aaron Irizarry</p>
              <p className='tits'>DESIGNING A CULTURE OF DESIGN</p>
              <p className='para'>Workplace culture doesn’t start with beanbags, foosball tables, or a beer fridge, and it doesn’t end with neckties, PCs, or big corporations. It’s the unwritten rules, behavior, beliefs, and the motivations that enable good work to get done, or it’s what stifles a workforce. For design to be most effective and for designers to feel valued, we need to work in a culture that embraces design and allows it to succeed.</p>
              <p className='para'>In Aaron’s session he will explore how to recognize the traits of organizations that *get* design, both large and small. He will share what those teams, departments, and companies have that others don’t, and more importantly, how to begin to change your own workplace’s culture. Once you’ve worked within a culture of design it’s almost impossible to imagine yourself anywhere else.</p>

              <p className='tits'>ABOUT AARON</p>

              <p className='para'>Aaron Irizarry is a Senior Product Designer for Nasdaq OMX, a lover of heavy metal, a foodie, and a master of BBQ arts. You can find some of his thoughts and presentations on the conversation surrounding design over at  <span><a href="discussingdesign.com">discussingdesign.com</a></span></p>
          </section>


          <section className='speakers'>
            <img src={adam} alt="" />
            <p className='title'>Adam Connor</p>
            <p className='tits'>LIGHTS! CAMERA! INTERACTION! DESIGN INSPIRATION FROM FILMMAKERS</p>
            <p className='para'>Films succeed in evoking responses and engaging audiences only with a combination of well-written narrative and effective storytelling technique. It’s the filmmaker’s job to put this together. To do so they’ve developed processes, tools and techniques that allow them to focus attention, emphasize information, foreshadow and produce the many elements that together comprise a well-told story.</p>

            <p className='para'>With this workshop, we’ll revisit the topic of using stories in design and expand on the technical aspects used in film to communicate. We’ll look at some tools used in film, such as cinematic patterns, beat sheets, and storyboards. We’ll consider why they’re used and how we might look to them for inspiration.</p>

            <p className='tits'>ABOUT ADAM</p>

            <p className='para'>Adam Connor is a designer, illustrator and speaker passionate about collaboration, communication, creativity and storytelling. As an Experience Design Director with Mad*Pow, Adam combines 10+ years of experience in interaction and experience design with a background in computer science, film, and animation to create effective and easy-to-use digital products and services. He believes that no matter how utilitarian a tool is, at the core of its creation lies a story; uncovering that story is key to its success. Occasionally, he shares his perspectives on design at <span><a href="adamconnor.com">adamconnor.com</a> and <a href="discussingdesign.com">discussingdesign.com</a></span> </p>

          </section>



          <section className='speakers'>
              <img src={aj} alt="" />
              <p className='title'>AJ Self</p>
              <p className='tits'>(YOU SHOULD BE) TESTING YOUR JAVASCRIPT</p>
              <p className='para'>JavaScript applications frequently utilize battle-tested libraries like jQuery, AngularJS, Backbone.js and more, but how can we be sure that our code is ready for production? This talk will share tips on how writing tests can be written easily and quickly and how to remove buggy code through testing.</p>

              <p className='tits'>ABOUT AJ</p>


              <p className='para'>AJ is a software engineer specializing in JavaScript working at Belly in Chicago. Lately he has been writing applications with AngularJS and loving it. When not coding he is out loving the outdoors with his dog, Sunshine.</p>
          </section>



          <section className='speakers'>
            <img src={arman} alt="" />
            <p className='title'>Arman Ghosh</p>
            <p className='tits'>DESIGNING DEALS: HOW GOOD DESIGN DRIVES SALES</p>
            <p className='para'>Perception influences decisions, especially when it comes to selling products and services. Learn why before you even start sales conversations; good, thoughtful design and presentation will define you and your ability to close deals.</p>
            <p className='tits'>ABOUT ARMAN</p>
            <p className='para'>Arman is an entrepreneur who has his roots planted in building aggressive sales and revenue-generating teams. Having built out national sales and operations teams in the B2B and consumer spaces, his focus has been driving aggressive growth for technology-based companies. He has an extensive operating background and has built a career disrupting sales processes and approaches with companies doing the same in their respective technology spaces.</p>
          </section>


          <section className='speakers'>
            <img src={bermon} alt="" />
            <p className='title'>Bermon Painter</p>
            <p className='tits'>DEATH TO WIREFRAMES: LONG LIVE RAPID PROTOTYPING</p>
            <p className='para'>Static wireframes are a drag on the whole design process. Prototyping makes things a little better by allowing you to stitch together static wireframes or mockups while adding basic interactions. Rapid prototyping with HTML, CSS, and JavaScript is even better and faster; it increases collaboration and improves the iteration process. Kill your wireframes. Long live rapid prototyping.</p>
            <p className='tits'>ABOUT BERMON</p>

            <p className='para'>Bermon is the organizer of various community groups for user experience designers and front-end developers, and the organizer of Blend Conference, a three-day, multi-track event for user experience strategists, designers and developers. He also leads the user experience team for Cardinal Solutions’ Charlotte office, where he consults with large enterprise clients on interesting problems across user experience, design and front-end development.</p>

          </section>


          <section className='speakers'>
            <img src={shay} alt="" />
            <p className='title'>Shay Howe</p>
            <p className='tits'>LESS IS MORE: HOW CONSTRAINTS CULTIVATE GROWTH</p>
            <p className='para'>By setting constraints, we force ourselves to be more productive. They help us make decisions, creating focus around the problem we are trying to solve. They improve our consistency, which provides a better experience for our users. And they help us grow, a valuable asset in times of innovation.</p>
            <p className='tits'>ABOUT SHAY</p>
            <p className='para'>As a designer and front-end developer, Shay Howe has a passion for solving problems while building creative and intuitive products. Shay specializes in product design and interface development, specialties which he regularly writes and speaks about.</p>

          </section>



        </div>
        



    </div>
  )
}

export default Speak