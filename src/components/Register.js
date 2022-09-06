import React,{useState} from 'react'

function Register({ setSignUp ,setSuccess,setCurrentUser}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
 
  const getInitialState = () => {
    const value = "male";
    return value;
  }

  const [gender, setGender] = useState(getInitialState)


  function handleSubmit(e) {
    e.preventDefault()
    console.log(userName)

    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        user_name: userName,
        email: email,
        password: password,
        gender: gender,
        age:age
        
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true)
        setCurrentUser(data)
      })

  }



  return (
    <div className="signUp">
      <div className="superShopper">
        <iframe title='register' src="https://giphy.com/embed/vlnkF7wqmMb2U" width="480" height="900" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>
      <div className="userSignUp">
        <h1>A<span>NTIQUE</span></h1>
        <form className='form1'  onSubmit={handleSubmit}>
          <label htmlFor="first_name">First Name</label><br />
          <input type="text" name='first_name' required onChange={(e)=>setFirstName(e.target.value)}/><br />

          <label htmlFor="last_name">Last Name</label><br />
          <input type="text" name='last_name' required onChange={(e)=>setLastName(e.target.value)}/>

          <label htmlFor="username">Username:</label><br />
          <input type="text" name='username' required onChange={(e)=>setUserName(e.target.value)}/><br />

          <label htmlFor="email">Email</label><br />
          <input type="email" name='email' required onChange={(e)=>setEmail(e.target.value)}/>

          <label htmlFor="password">Password</label><br />
          <input type="password" name='password' required onChange={(e)=>setPassword(e.target.value)}/>

          <label htmlFor="gender">Gender</label><br />
          <select name="gender" id="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select><br></br>

          <label htmlFor="age">Age</label><br />
          <input type="number" name='age' required onChange={(e)=>setAge(e.target.value)}/>

          <input type="submit" id='welcomebtn' value='Sign Up' ></input>
        </form>
        <h4><small>Already have an account?</small><br /><button className='loginbtn' onClick={()=>setSignUp(false)} >Log in</button></h4>
      </div>
    </div>
  )
}

export default Register