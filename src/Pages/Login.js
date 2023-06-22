import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../Redux/action/authAction';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/register/login', user);
      if (res.data.message) {
        localStorage.setItem('isLoggedIn', 'true');
        dispatch(loginSuccess(res.data.message));
        navigate('/Register');
      }
    } catch (error) {
      console.error(error);
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <>
      <br />
      <br />
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="enter your email"
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="enter your password"
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleLogin}>submit</button>
    </>
  );
};


export default Login;

