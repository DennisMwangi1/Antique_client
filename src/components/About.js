import React from 'react'
import { FaLaptop, FaPhone,FaMap, FaQuestionCircle,  FaFacebookMessenger, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

function About() {
  return (
    <div className='aboutuspage'>
      <h1>Get In Touch With Us</h1>
      <div className='getintouch'>
        <div className='getintouchform'>
          <h3>Send a Message</h3>
          <p>Fill out this from if you have any urgent question and we will get back to you</p>
          <form>
            <label htmlFor='name'>Name</label><br></br>
            <input type='text' placeholder='Enter name...' name='name'></input><br></br>

            <label htmlFor='email'>Email</label><br></br>
            <input type='email' placeholder='Enter email...' name='name'></input><br></br>

            <label htmlFor='interest'>Interested in</label><br></br>
            <select name='interest'>
              <option value="workout">Workout</option>
              <option value="consultation">Consultation</option>
              <option value="trainers">Trainers</option>
              <option value="pricing">Pricing</option>
            </select><br></br>

            <label htmlFor='phone'>Phone number</label><br></br>
            <input type='number' placeholder='Enter phone number...' name='name'></input><br></br>

            <label htmlFor='message'>Message</label><br></br>
            <textarea type='textarea' placeholder='Enter message...' name='message'></textarea><br></br>
            <input id='submit' type="submit" value='Send'/>

          </form>
        </div>
        <div className='getintouchinfo'>
          <h3>Call us</h3>
          <p>This number is available for calls Monday to Saturday between 7am and 9pm</p>
          <span><FaPhone /> +555 847 321</span>

          <h3>Visit us</h3>
          <p>We are located at 11th street kingsway avenue</p>
          <span><FaMap /> 11th kingsway ave</span>
          
          <h3>Live Chat</h3>
          <p>We carry out some live QnA sessions on saturdays between 11am and 1pm</p>
          <span><FaLaptop />  https/Antique/ivesession/join/jkhf.com</span>

        </div>
      </div>
      <div className='map'>
        <iframe className='iframe' title='iframe' src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d19888.47604020973!2d-0.9912607504361057!3d51.45706390255551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d51.4571976!2d-0.973923!4m5!1s0x48769b7cac124cfd%3A0x5a96642e0abd8c69!2sGym%2C%20Reading%2C%20UK!3m2!1d51.456820199999996!2d-0.9737355999999999!5e0!3m2!1sen!2ske!4v1662460405858!5m2!1sen!2ske" width="800" height="450"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='faq'>
        <div className='title'>
          <small><FaQuestionCircle/>FAQ</small>
          <h1>Frequently<br></br>asked<br></br>questions.</h1>
        </div>
        <div className='questions'>
          <ul>
            <li>How long are the training sessions?</li>
            <p>Depending on the clients wants they go up to 3 hours</p>
            <li>Can a client pay in installments?</li>
            <p>Unfortunately, payment is firt hand for the tier<br></br> the client wants to subscribe too.</p>
            <li>Are the all the trainers prices the same?</li>
            <p>They vary in some instances depending on the type<br></br> of specialization of the trainer</p>
          </ul>
        </div>
      </div>
      <div className='footer'>
        <h2>Join Antique Today.<br></br>Getting More Done<br></br>Together.</h2>
        <div className='contactinfo'>
          <div>
            <h3>Address</h3>
            <p>Gym,9round, 11th kingsway avenue</p>
          </div>
          <div>
            <h3>Phone Number</h3>
            <p>+555 847 321</p>
            <h3>Email</h3>
            <p>antiquefitness@gmail.com</p>
          </div>
          <div className='follow'>
            <h3>Follow</h3>
            <p><FaFacebookMessenger/><FaTwitter/><FaYoutube/><FaInstagram/></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About