import React,{useState} from 'react'
import Register from './Register';

function Login({ handleSubmit, handleUser, handlePwd, logged, setSuccess, setCurrentUser }) {

  const [signUp, setSignUp] = useState(false)
  
  
  
  return (

    signUp ? <Register signUp={signUp} setSignUp={setSignUp} setSuccess={setSuccess} setCurrentUser={setCurrentUser} />:
    <div className="signUp">
      <div className="superShopper">
        <iframe title='login' src="https://giphy.com/embed/3o7btMPzJrsdyWVHeo" width="450" height="450" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>
      <div className="userSignUp">
        <h1>A<span>NTIQUE</span></h1>
        <form className='form1' onSubmit={handleSubmit}>
          <p className={logged?'invalidUsernamefalse':'invalidUsername'}>Invalid username or password</p>
          <label htmlFor="username">Username:</label><br />
          <input type="text" name='username' required onChange={handleUser}/><br />
          <label htmlFor="password">Password</label><br />
          <input type="password" name='password' required onChange={handlePwd}/>
          <input type="submit" id='welcomebtn' value='Log In'></input>
        </form>
          <h4><small>Don't have an account?</small><br/><button onClick={()=>setSignUp(true)}>Sign up</button></h4>
      </div>
    </div> 


  )
}

export default Login