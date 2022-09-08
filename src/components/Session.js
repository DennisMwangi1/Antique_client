import React, { useEffect, useState } from 'react'

function Session({ session }) {
  const [trainer, setTrainer] = useState([])


  
   useEffect(() => {
        fetch(`http://localhost:9292/trainers/${session.trainer_id}`)
            .then((res) => res.json())
            .then((data) => setTrainer(data))
   }, [])
  
  function handleDelete(id){
    fetch(`http://localhost:9292/sessions/${id}`, {
      method: "DELETE",
    });
     
  }
  return (
    <div className='trainer'>
      <img src={trainer.image} alt="" />
      <h3>NAME:<em>{trainer.name}</em> </h3>
      <h3>DATE:<em>{session.date}</em> </h3>
      <h3>START-TIME:<em>{session.start_time} AM</em> </h3>
      <h3>FINISH-TIME:<em>{session.finish_time} AM</em> </h3>
      <button onClick={(e) => {
        handleDelete(session.id)
        e.target.parentNode.remove()
      }}>Delete Session</button>
    </div>
  )
}

export default Session