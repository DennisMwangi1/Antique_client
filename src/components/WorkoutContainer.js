import React, { useEffect, useState } from 'react'
import Workout from './Workout'
import { FaFacebookMessenger, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

function WorkoutContainer({currentUser}) {
  const [workouts, setWorkouts] = useState([])
  const [loaded,setLoaded] =useState(false)
  useEffect(() => {
      fetch("http://localhost:9292/workouts")
    .then((res) => res.json())
        .then((data) => {
          setWorkouts(data)
          let timer1 = setTimeout(() => setLoaded(true), 2000)

        return () => {
            clearTimeout(timer1)
        }
        })
    },[])
  
  return (
    
   loaded? <div className='workouts'>
      <fieldset >
            <legend>Cardio</legend>
        {workouts.map((workout) => {
          if (workout.category === 'cardio')
            return <Workout key={workout.id} workout={workout} currentUser={currentUser} />
          return true
        }
        )}
           
      </fieldset>

       

      <fieldset >
            <legend>Chest</legend>
        {workouts.map((workout) => {
          if (workout.category === 'chest')
            return <Workout key={workout.id} workout={workout} currentUser={currentUser} />
          return true
        }
        )}
           
      </fieldset>

      <fieldset >
            <legend>Arms</legend>
        {workouts.map((workout) => {
          if (workout.category === 'arms')
            return <Workout key={workout.id} workout={workout} currentUser={currentUser}/>
          return true
        }
        )}
           
      </fieldset>

      <fieldset >
            <legend>Back</legend>
        {workouts.map((workout) => {
          if (workout.category === 'back')
            return <Workout key={workout.id} workout={workout} currentUser={currentUser}/>
          return true
        }
         
        )}
           
      </fieldset>

      <fieldset >
            <legend>Abs</legend>
        {workouts.map((workout) => {
          if (workout.category === 'abs')
            return <Workout key={workout.id} workout={workout} currentUser={currentUser}/>
          return true
        }
        )}
           
      </fieldset>

      <fieldset >
            <legend>Legs</legend>
        {workouts.map((workout) => {
          if (workout.category === 'legs')
            return <Workout key={workout.id} workout={workout} currentUser={currentUser}/>
          return true
        }
        )}
           
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

    </div>:<h1>Loading</h1>
  )
}

export default WorkoutContainer