import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
//import fire from "./components/fire.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/signUp.jsx";
import App from './index.jsx';
import Home from './userHome.jsx'




// import Login from './Login';



class Auth extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //user: null,
    //account: udefined
    //}
    //this,authListener = this authListener.bind(this);
  }

  componentDidMount(){
    this.props.authListener();
  }

  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //     if (user) {
  //       this.setState({ user });
  //       localStorage.setItem('user', user.uid);
  //     } else {
  //       this.setState({ user: null });
  //       localStorage.removeItem('user');
  //     }
  //   });
  // }
    render() {
      return (
        <div>
            <h1>  &#9885; SmartWash </h1>
            {this.props.state.user ? (<Redirect to= "/micuenta"/>) : (<Login/>)}
            </div>
          )}
        }
export default Auth;

//<Home user={this.props.state.user}/>
