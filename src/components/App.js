import React, {useEffect, useState} from "react"
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from "./Login";
import About from "./About";
import WorkoutContainer from "./WorkoutContainer";

function App() {
  const[currentUser,setCurrentUser]=useState({})
  const [users, setUsers] = useState([]);
  const [LogUser, setLogUser] = useState('');
  const [Logpwd, setLogpwd] = useState('');
  const [success, setSuccess] = useState(false)
  const [logged, setLogged] = useState(true)
  
  
  // localStorage.clear()
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



  function handleUser(e) {
    setLogUser(e.target.value)
  }

  function handlePwd(e) {
    setLogpwd(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
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
            <Route path="/workouts" element={<WorkoutContainer currentUser={currentUser } />}/>
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
