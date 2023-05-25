// const response = await fetch('http://localhost:5001/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ username, password }),
// });

// if (response.ok) {
//   const data = await response.json();
//   console.log(data); // You can store the returned data to your state here
// } else {
//   console.log('Login failed');
//   // Handle login failure scenario
// }
import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import Intra from "../img/intra.png";
import React, { useState } from 'react';
import axios from "axios";

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users', { username, password });
  
      console.log(response.data); // You can store the returned data to your state here
    } catch (error) {
      console.log('Login failed');
      // Handle login failure scenario
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3001/users/login', { username, password });
    
      if (response.data.success) {
        // Redirect to home page
        // The exact method for redirecting depends on how you've set up routing in your app
        // If you're using react-router, this might be done using the useHistory hook
        window.location.href = '/home';
      } else {
        // Handle login failure, for example by setting an error message in your state
        console.log('Login failed');
      }
    } catch (error) {
      // Handle unexpected errors
      console.log('An error occurred during login');
    }
  };
  
//   const google = () => {
//     window.open("http://localhost:5000/auth/google", "_self");
//   };

//   const github = () => {
//     window.open("http://localhost:5000/auth/github", "_self");
//   };

//   const facebook = () => {
//     window.open("http://localhost:5000/auth/facebook", "_self");
//   };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="submit" type="submit">SUBMIT</button>
          </form>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
        <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit" type="submit">LOGIN</button>
        </form>
        <div className="loginButtonContainer">
        <div className="loginButton google">
          {/* <div className="loginButton google" onClick={google}> */}
          <img src={Google} alt="" className="icon" />
        </div>
        <div className="loginButton facebook">
          {/* <div className="loginButton facebook" onClick={facebook}> */}
          <img src={Facebook} alt="" className="icon" />
        </div>
        <div className="loginButton github">
          {/* <div className="loginButton github" onClick={github}> */}
          <img src={Github} alt="" className="icon" />
        </div>
		    <div className="loginButton intra">
          {/* <div className="loginButton google" onClick={google}> */}
          <img src={Intra} alt="" className="icon" />
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;