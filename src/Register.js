import React from 'react'

const Register = () => {
  return (
    <div>
        <section className='rowalt'>

                
            <h2>Register</h2>

            <p>Every year we aim to have an unbelievable time, and this year we'd love it for you to join us. Conference passes only cost $99, one of the best values you'll find.</p>

        </section>


        <div className='regi'>
            <section className='attend'>
                <h1>Purchase a Conference Pass</h1>
                <p>$99 PER PASS</p>
                <p>Purchase your Styles Conference pass using the form to the right. Multiple passes may be purchased within the same order, so feel free to bring a friend or two along. Once your order is finished we’ll follow up and provide a receipt for your purchase. See you soon!</p>
                <h4>Why Attend?</h4>
                <ul>
                    <li>Over twenty world-class speakers</li>
                    <li>One full day of workshops and two full days of presentations</li>
                    <li>August in Chicago is simply amazing</li>
                </ul>
            </section>

            <section className='form'>

                <form action="" method="post">
                    <section>

                    <p>Name</p>
                    <input type="text" name="fullname" id="" placeholder='Full Name'/>
                    </section>

                    <section>

                    <p>Email</p>
                    <input type="email" name="email" id="" placeholder='Email Address' />
                    </section>

                    <section>

                    <p>Number of Passes</p>
                        <select name="passes" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select>
                    </section>

                    <section>

                    <p>Comments</p>
                    <textarea className='com' name="comment" id="" cols="2" rows="5"></textarea>
                    </section>
                    

                    <section>

                    <button>Purchase</button>
                    </section>

                </form>





            </section>
        </div>



    </div>
  )
}

export default Register