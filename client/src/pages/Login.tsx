import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import Intra from "../img/intra.png";
import React, { useState } from 'react';
import axios from "axios";
import * as Styled from "../styles/login";


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
  return(
    <Styled.Container>
        <Styled.SignUpContainer signinIn={signIn}>
            <Styled.Form>
                <Styled.Title>Create Account</Styled.Title>
                <Styled.Input type='text' placeholder='Name' />
                <Styled.Input type='email' placeholder='Email' />
                <Styled.Input type='password' placeholder='Password' />
                <Styled.Button>Sign Up</Styled.Button>
            </Styled.Form>
        </Styled.SignUpContainer>

        <Styled.SignInContainer signinIn={signIn}>
             <Styled.Form>
                 <Styled.Title>Sign in</Styled.Title>
                 <Styled.Input type='email' placeholder='Email' />
                 <Styled.Input type='password' placeholder='Password' />
                 <Styled.Anchor href='#'>Forgot your password?</Styled.Anchor>
                 <Styled.Button>Sigin In</Styled.Button>
             </Styled.Form>
        </Styled.SignInContainer>

        <Styled.OverlayContainer signinIn={signIn}>
            <Styled.Overlay signinIn={signIn}>

            <Styled.LeftOverlayPanel signinIn={signIn}>
                <Styled.Title>Welcome Back!</Styled.Title>
                <Styled.Paragraph>
                    To keep connected with us please login with your personal info
                </Styled.Paragraph>
                <Styled.GhostButton onClick={() => toggle(true)}>
                    Sign In
                </Styled.GhostButton>
                </Styled.LeftOverlayPanel>

                <Styled.RightOverlayPanel signinIn={signIn}>
                  <Styled.Title>Hello, Friend!</Styled.Title>
                  <Styled.Paragraph>
                      Enter Your personal details and start journey with us
                  </Styled.Paragraph>
                      <Styled.GhostButton onClick={() => toggle(false)}>
                          Sigin Up
                      </Styled.GhostButton> 
                </Styled.RightOverlayPanel>

            </Styled.Overlay>
        </Styled.OverlayContainer>

    </Styled.Container>
)
}
  // return (
  //   <div className="login">
  //     <div className="wrapper">
  //       <div className="left">
  //         <form onSubmit={handleSubmit}>
  //             <input
  //               type="text"
  //               placeholder="Username"
  //               value={username}
  //               onChange={(e) => setUsername(e.target.value)}
  //             />
  //             <input
  //               type="password"
  //               placeholder="Password"
  //               value={password}
  //               onChange={(e) => setPassword(e.target.value)}
  //             />
  //             <button className="submit" type="submit">SUBMIT</button>
  //         </form>
  //       </div>
  //       <div className="center">
  //         <div className="line" />
  //         <div className="or">OR</div>
  //       </div>
  //       <div className="right">
  //       <form onSubmit={handleLogin}>
  //           <input
  //             type="text"
  //             placeholder="Username"
  //             value={username}
  //             onChange={(e) => setUsername(e.target.value)}
  //           />
  //           <input
  //             type="password"
  //             placeholder="Password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //           />
  //           <button className="submit" type="submit">LOGIN</button>
  //       </form>
  //       <div className="loginButtonContainer">
  //       <div className="loginButton google">
  //         {/* <div className="loginButton google" onClick={google}> */}
  //         <img src={Google} alt="" className="icon" />
  //       </div>
  //       <div className="loginButton facebook">
  //         {/* <div className="loginButton facebook" onClick={facebook}> */}
  //         <img src={Facebook} alt="" className="icon" />
  //       </div>
  //       <div className="loginButton github">
  //         {/* <div className="loginButton github" onClick={github}> */}
  //         <img src={Github} alt="" className="icon" />
  //       </div>
	// 	    <div className="loginButton intra">
  //         {/* <div className="loginButton google" onClick={google}> */}
  //         <img src={Intra} alt="" className="icon" />
  //       </div>
  //       </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Login;