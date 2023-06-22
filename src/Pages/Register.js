import React, { useEffect, useState } from 'react'; // Import React
import axios from 'axios'
const Register = () =>{
    const [user,setUser] = useState({name:"",email:"",password:""})

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }
    const handleRegister = async () => {
        try {
          const res = await axios.post('http://localhost:5000/api/register/users', user);
          console.log(res.data)
        } catch (error) {
          console.error(error);
        }
      };
  
    return(
        <>
        <br/><br/>
       <input type="text"
       name="name"
       value={user.name}
       placeholder="enter your name"
       onChange={(e)=>handleChange(e)}
       /> <br/><br/>
       <input type="email"
       name="email"
       value={user.email}
       placeholder="enter your email"
       onChange={(e)=>handleChange(e)}
       />
       <br/><br/>
       <input type="password"
       name="password"
       value={user.password}
       placeholder="enter your passwrod"
       onChange={(e)=>handleChange(e)}
       />
       <br/><br/>
       <button onClick={handleRegister}>submit</button><br/><br/>
    </>
    )
}
export default Register