import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import loginbg from '../images/login.gif';
import Home from './Home';
import Register from './Register';

function Login({ handleSubmit, handleUser, handlePwd, logged }) {

  const [signUp, setSignUp] = useState(false)
  
  
  
  return (

    signUp?<Register/>:
    <div class="signUp">
      <div class="superShopper">
        {/* <img src={loginbg} alt="" width="400px" height="500px" /> */}
        <iframe src="https://giphy.com/embed/3o7btMPzJrsdyWVHeo" width="450" height="450" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
      <div class="userSignUp">
        <h1>A<span>NTIQUE</span></h1>
        <form className='form1' onSubmit={handleSubmit}>
          <p className={logged?'invalidUsernamefalse':'invalidUsername'}>Invalid username or password</p>
          <label for="username">Username:</label><br />
          <input type="text" name='username' required onChange={handleUser}/><br />
          <label for="password">Password</label><br />
          <input type="password" name='password' required onChange={handlePwd}/>
          <input type="submit" id='welcomebtn' value='Sign In'></input>
        </form>
          <h4><small>Don't have an account?</small><br/><button onClick={()=>setSignUp(true)}>Sign up</button></h4>
      </div>
    </div> 


  )
}

export default Login