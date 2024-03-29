import React, {useEffect, useState} from "react"
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from "./Login";
import About from "./About";
import WorkoutContainer from "./WorkoutContainer";
import Profile from "./Profile";
import Trainers from "./Trainers";

function App() {
  const[currentUser,setCurrentUser]=useState({})
  const [users, setUsers] = useState([]);
  const [LogUser, setLogUser] = useState('');
  const [Logpwd, setLogpwd] = useState('');
  const [success, setSuccess] = useState(true)
  const [logged, setLogged] = useState(true)
  const [workouts, setWorkouts] = useState([])
  
  
  useEffect(() => { 
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users)
      })
  }, []);


  useEffect(() => {
    const data = window.localStorage.getItem('ANTIQUE_APP')
    const user = window.localStorage.getItem('ANTIQUE_USER')
    if (data !== null  ) {
      setSuccess(JSON.parse(data))
      setCurrentUser(JSON.parse(user))
    }
  },[])
  useEffect(() => {
    window.localStorage.setItem('ANTIQUE_APP', JSON.stringify(success))
    window.localStorage.setItem('ANTIQUE_USER', JSON.stringify(currentUser))
    
  },[success,currentUser])

   useEffect(() => {
      fetch("http://localhost:9292/workouts")
    .then((res) => res.json())
        .then((data) => {setWorkouts(data)})
   }, [])
  
  
 


  function handleUser(e) {
    setLogUser(e.target.value)
  }

  function handlePwd(e) {
    setLogpwd(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true)
    users.filter((user) => {
      
      if (user.user_name === LogUser && user.password === Logpwd) {
        setCurrentUser(user)
        setSuccess(true)
        
      } else {
          setLogged(false)
      setLogUser('')
      setLogpwd('')
      e.target.reset()
      }
      return true
    })
  }



  return (

    success?
      <div className='a'>
      <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path='/' exact element={<Home currentUser={currentUser } />} />
            <Route path="/about" element={<About />} />
            <Route path="/workouts" element={<WorkoutContainer currentUser={currentUser} workouts={workouts} />} />
            <Route path="/trainers" element={<Trainers currentUser={currentUser } />}/>
            <Route path="/profile" element={<Profile currentUser={currentUser} workouts={workouts } />}/>
      </Routes>
      </BrowserRouter>
      </div>
      :
      <Login
        handleSubmit={handleSubmit}
        handleUser={handleUser}
        handlePwd={handlePwd}
        logged={logged}
        setSuccess={setSuccess}
        setCurrentUser={setCurrentUser}
      />
  );
}

export default App;
