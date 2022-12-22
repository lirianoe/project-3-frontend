import { Link } from "react-router-dom";

import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';


const Login = () => {

    const { storeToken, authenticateUser } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const [error, setError] = useState(null)
    
    const [state, setState] = useState({
        email: '',
        password: ''
      });
    
      const updateState = e => setState({
        ...state,
        [e.target.name]: e.target.value
      });

     const onFormSubmit = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, state)
        .then(axiosResponse => {
            console.log(axiosResponse.data)
            storeToken(axiosResponse.data.authToken);
            authenticateUser();
            navigate('/');
          })
          .catch(err => setError(err.response.data));
     }
  
    return (
        
        <div className="center">
        <h1>LOGIN</h1>
        <form onSubmit={onFormSubmit} className="logIn">

        <div className="txt-field">
        <input value={state.email} type="text" name="email" id="email" placeholder="Email" onChange={updateState}/>
        </div>
        <div className="txt-field">
        <input value={state.password} type="password" name="password" id="passwordInput" placeholder="Password" onChange={updateState}/>
        </div>
  
       <p className="messageError">{error}</p>
        <button className="button">Log In</button>
        

        <div className="signup-link">
        <p>You don't have an account? <span><Link to='/signup' className="a">Sign Up</Link></span></p>
        </div>
      </form>
        </div>
    );
}

export default Login;
