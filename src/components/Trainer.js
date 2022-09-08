import React, { useEffect, useState } from 'react'

function Trainer({ trainer, currentUser }) {
  
  const [bookSession, setBookSession] = useState(false)
  const [sessionBooked, setSessionBooked] = useState(false)
  const [date,setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [finishTime, setFinishTime] = useState('')
  const [filled, setFilled] = useState(true)



  function handleBookSession(e) {
    e.preventDefault()
    console.log(currentUser)
    if (startTime === '' || finishTime === "" || date === "") {
      setFilled(false)
    } else {

      fetch("http://localhost:9292/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trainer_name: trainer.name,
        start_time: startTime,
        finish_time: finishTime,
        date: date,
        user_id: currentUser.id,
        trainer_id:trainer.id
        
      }),
    })
        .then(() => {
        setSessionBooked(true)
      setBookSession(false)
      })
   
      
    }

  }
  return (
    <div className='trainer'>
      <img src={trainer.image} alt="" />
      <h3>NAME:<em>{trainer.name}</em> </h3>
      <h3>AGE: <em>{trainer.age}</em></h3>
      <h3>TRAINING EXPERIENCE:<em>{trainer.experience} years</em></h3>
      <h3>SPECIALIZATION: <br></br><em>{trainer.specialization}</em></h3>
      <button className={sessionBooked ? "disabled" : "able"} onClick={() => setBookSession(!bookSession)}>{sessionBooked ? "Session booked" : "Book Session"}</button>
      {bookSession ?
        <>
          {filled?null:<p style={{"color":"red"}}>Please fill in date, start time and finish time</p>}
          <form className='sessionform' onSubmit={handleBookSession}>
            <label htmlFor='date'>Enter session date and time:</label><br></br>
            <input type="date" name='date'  min="2022-09-08" max="2022-12-29" onChange={(e) => setDate(e.target.value)}/><br></br>

            <label htmlFor='start'>Enter start time</label><br></br>
            <input type="time" onChange={(e) => setStartTime(e.target.value)} /><br></br>

            <label htmlFor='start'>Enter Finish time</label><br></br>
            <input type="time" onChange={(e) => setFinishTime(e.target.value)} /><br></br>

            <input type="submit" value="Book" />



          </form>
        </>
        : null}
    </div>
  )
}

export default Trainer