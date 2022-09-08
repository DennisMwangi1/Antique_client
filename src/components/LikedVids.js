import React from 'react'

function LikedVids({workout}) {
  return (
     <div className='workoutvideo'>
            <iframe width="400" height="200" src={workout.source} title={workout.id}></iframe>
            <h3>Workout by {workout.creator }</h3>
            <p>Time: {workout.time} minutes</p>
      
            <p>Intensity: {workout.intensity} out of 10</p>
            
        </div>
  )
}

export default LikedVids