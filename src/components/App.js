import React, {useEffect, useState} from "react"
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from "./Login";

function App() {
  const [users, setUsers] = useState([]);
  const [LogUser, setLogUser] = useState('');
  const [Logpwd, setLogpwd] = useState('');
  const [success, setSuccess] = useState(false)
  const [logged, setLogged] = useState(true)
  
  useEffect(() => { 
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users)
        // setSuccess(true)
      })
  }, []);

  // console.log(users)

  function handleUser(e) {
    setLogUser(e.target.value)
  }

  function handlePwd(e) {
    setLogpwd(e.target.value)
  }

  function handleSubmit(e) {
    let successful = []
    e.preventDefault();
    users.filter((user) => {
      if (user.user_name === LogUser && user.password === Logpwd) {
        successful.push(user)
        return true
      } else {
        return false
      }
    })
    if (successful.length > 0){
      setSuccess(true)
    }else{
      // alert("Invalid username or password")
      setLogged(false)
      setLogUser('')
      setLogpwd('')
      e.target.reset()
    }
  }


  return (

   success? <div className='a'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div> : <Login
        handleSubmit={handleSubmit}
        handleUser={handleUser}
        handlePwd={handlePwd}
        logged={logged}
      />
  );
}

export default App;
