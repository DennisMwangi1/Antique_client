import React, { useEffect, useState } from 'react'
import { FaFacebookMessenger, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Trainer from './Trainer'

function Trainers({currentUser}) {
    const [trainers, setTrainers] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/trainers")
            .then((res) => res.json())
            .then((data) => setTrainers(data))
    }, [])
    return (
        <>
        <fieldset className='trainerssection'>
            <legend>Meet Our Trainers</legend>
            <div className='trainers'>

                {trainers.map((trainer) => {
                    return <Trainer key={trainer.id} trainer={trainer} currentUser={currentUser } />
                })}
            </div>
            </fieldset>
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
              <p><FaFacebookMessenger /><FaTwitter /><FaYoutube /><FaInstagram /></p>
            </div>
          </div>
        </div>
        </>
    )
}

export default Trainers