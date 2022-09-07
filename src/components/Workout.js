import React,{useEffect, useState} from 'react'

function Workout({workout,currentUser}) {
    const [liked, setLiked] = useState(false)

    function addLiked(id) {
        
        fetch(`http://localhost:9292/workouts/${id}`, {
            method: "PATCH",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify({
                user_id:currentUser.id
            })
        })
        // .then(console.log('hello'))
        // fetch(`http://localhost:9292/workouts/${id}`)
       
    }
    

    return (
        <div className='workoutvideo'>
            <iframe width="400" height="200" src={workout.source} title={workout.id}></iframe>
            <h3>Workout by {workout.creator }</h3>
            <p>Time: {workout.time} minutes</p>
            <p>Intensity: {workout.intensity} out of 10</p>
            <button onClick={() => {
                addLiked(workout.id)
                setLiked(true)

            }}>{liked ? <span>&#x2665; Liked</span> : <span>&#x2661; Like</span>}</button>
        </div>
    )
}

export default Workout