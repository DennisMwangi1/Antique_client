import React from 'react'
import Cbum from '../images/Cbum.png'
import Wpose from '../images/Wpose-removebg-preview.png'
import trainer1 from '../images/trainer1.jpg'
import trainer2 from '../images/trainer2.jpg'
import trainer3 from '../images/trainer3.jpg'
import Wtrainer1 from '../images/Wtrainer1.jpg'
import Wtrainer2 from '../images/Wtrainer2.jpg'

function Home() {
  return (
    <div className='home'>
        <div className='largetxt'>
            <p>BUILD <br></br>YOUR BODY</p>
            
        </div>
        <div className='smalltxt'>
            <img src={Cbum} alt='cbum' height='600px' width='500px'/>
            <p>When you're at the gym feeling like you'll never be one of those people who look like they've been at it their entire lives, remember that they all started somewhere.</p>
            
        </div>
          <div className='sect2border'>
            <p>Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity.¨ – John F. Kennedy<br></br><button>EXPLORE</button></p>
            <h1>YOUR BODY IS A WORK OF ART</h1>
            <img src={Wpose} alt="Wpose" height="650px"width='450px'/>
            
          </div>
          {/* <div className='sect3'>
            <h1>WE ARE HERE TO GUIDE YOU</h1>
            <p>Team of expert trainers are alwayc here to guide and support you.Get professional input on training scheme,intensity<br></br> and healthy nutrition based on your individual ability and performance.</p>
            <div className='trainers'>
              <img src={trainer1}  />
              <img src={Wtrainer2} />
              <img src={trainer3}  />
              <img src={Wtrainer1} />
              <img src={trainer2}  />
            </div>
          </div> */}
    </div>
  )
}

export default Home