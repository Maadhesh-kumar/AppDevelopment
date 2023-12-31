import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/images/bg.jpg';
import { useNavigate } from 'react-router-dom';
import '../assets/css/custom.css';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});



  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

  

    if (!username.trim()) {
      validationErrors.username = "Username is required";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Handle successful login here
      alert("Login successful");
      navigate("/home");
      dispatch(login(username)); 
      

    } else {
      // Handle validation errors by setting the state
      setErrors(validationErrors);
    }
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    minWidth: '100vw'
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row justify-content-center p-5">
        <div className="col-md-3 col-sm-4 mt-5" >
          <div className="card  card-authentication1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
            <div className="card-body ">
              <div className="card-content p-2 ">
                <div className="text-center">
                </div>
                <div className="card-title text-center py-3 text-white fs-4">Login</div>
                <form>
                  <div className="form-group">
                    <div className="position-relative has-icon-right">
                      <input
                        type="text"
                        className="form-control input-shadow"
                        placeholder="Enter Username"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                      <h6 className="errors">{errors.username && <span>{errors.username}</span>}</h6>
                    </div>
                  </div>
               
                  <div className="form-group mt-3">
                    <div className="position-relative has-icon-right">
                      <input
                        type="password"
                        id="exampleInputPassword"
                        className="form-control input-shadow"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <h6 className="errors">{errors.password && <span>{errors.password}</span>}</h6>
                    </div>
                  </div>
                  <button type="button" className="btn btn-dark btn-block my-4 " onClick={handleSubmit} style={{ marginLeft: '120px' }}>Sign In</button>
                </form>
              </div>
            </div>
            <div className="card-footer text-center py-3">
              <p className="text-dark mb-0">No account? <button onClick={() => navigate("/signup")} style={{ border: "none", backgroundColor: "white",borderRadius:"5px",padding:"4px",marginlLeft:"2px",color:"black" }}>click Here</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
