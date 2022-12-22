import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
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
      console.log(state)
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, state)
        .then(axiosResponse => {
          console.log(axiosResponse.data)
          navigate('/login');
        })
        .catch(err => setError(err.response.data));
    }

    return (
        <div className="center">
        <h1>SIGN UP</h1>
        <form onSubmit={onFormSubmit} className="signup">

        <div className="txt-field">
        <input value={state.email} type="text" name="email" id="email" placeholder="Email" onChange={updateState}/>
        </div>
        <div className="txt-field">
        <input  value={state.password} type="password" name="password" id="passwordInput" placeholder="Password" onChange={updateState}/>
        </div>
  
        <p className="messageError">{error}</p>
        <button className="button">Sign Up</button>

        <div class="signup-link">
        <p>Already Have an Account? <span><Link to='/login' className="a">Sign Up</Link></span></p>
        </div>
      </form>
        </div>
    );
}

export default Signup;
