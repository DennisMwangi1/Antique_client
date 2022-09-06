import React,{useState,useEffect} from 'react'
import Cbum from '../images/Cbum.png'
import Wpose from '../images/Wpose-removebg-preview.png'
import WelcomeMsg from './WelcomeMsg'
import { FaFacebookMessenger, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


function Home({currentUser}) {
  const [welcomemsg, setWelcomemsg] = useState(true)
  
  useEffect(() => {
    
    let timer1 = setTimeout(() => setWelcomemsg(false), 6000)
    
    return () => {
      clearTimeout(timer1)
    }
  },[])

  return (

    welcomemsg ? <WelcomeMsg currentUser={currentUser} />
      :
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

        <div className='sect3'>
        <h1>WE ARE HERE TO GUIDE YOU</h1>
        <p>A team of expert trainers here to guide you in your journey.<br></br>Get professional training schemes,intensity and healthy nutrition advice based on individual performance and abilities.</p>
          <h2>OUR PRICES</h2>
        
        <div className='subsect3'>
          <div className='price'>
            <h2>1</h2>
            <p className='p1'>MONTH</p>
            <p>3 trainings per week<br></br>1 month nutrition plan<br></br>1 training consultation session</p>
            <span>KSH 3,000</span>
          </div>

          <div className='price'>
            <h2>3</h2>
            <p className='p1'>MONTHS</p>
            <p>4 trainings per week<br></br>3 months nutrition plan<br></br>3 training consultation sessions</p>
            <span>KSH 7,000</span>
          </div>

          <div className='price'>
            <h2>6</h2>
            <p className='p1'>MONTHS</p>
            <p>4 trainings per week<br></br>6 months nutrition plan<br></br>6 training consultation session<br></br>2 swimming lessons per month</p>
            <span>KSH 15,000</span>
          </div>

          <div className='price'>
            <h2>12</h2>
            <p className='p1'>MONTHS</p>
            <p>5 trainings per week<br></br>12 months nutrition plan<br></br>12 training consultation session<br></br>3 swimming lessons per month<br></br>1 boxing lesson per week</p>
            <span>KSH 30,000</span>
          </div>
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

export default Home