import React, { useEffect, useState } from 'react'
import Workout from './Workout'
import LikedVids from './LikedVids'
import Session from './Session'

function Profile({ currentUser, workouts }) {
  
  const [sessions, setSessions] = useState([])
  
   useEffect(() => {
        fetch("http://localhost:9292/sessions")
            .then((res) => res.json())
            .then((data) => setSessions(data))
   }, [])
  
  return (
    <div>
      <div className='userinfo'>
        <h3>USERNAME:<span>{currentUser.user_name}</span></h3>
        <h3>FULLNAMES:<span>{currentUser.first_name} {currentUser.last_name}</span></h3>
        <h3>EMAIL:<span>{currentUser.email}</span></h3>
        <h3>AGE:<span>{currentUser.age}</span></h3>
        <h3>GENDER:<span>{currentUser.gender}</span></h3>
      </div>
      <fieldset>
        <legend>Upcoming Sessions</legend>
        {sessions.map((session) => {
          if (session.user_id === currentUser.id) {
            return (
              <Session key={session.id} session={session } />
            )
          }
        })}
      </fieldset>
      <fieldset>
        <legend>Liked Videos</legend>
        {workouts.map((workout) => {
          if (workout.user_id === currentUser.id)
            return <LikedVids key={workout.id} workout={workout} currentUser={currentUser} />
            return true
        })}

      </fieldset>
    </div>
  )
}

export default Profile