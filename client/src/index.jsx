import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Auth from './Auth.jsx';
import fire from "./components/fire.jsx";
import Navigation from "./components/Navigation.jsx";
import CheckOut from "./components/checkOut.jsx";
import MisOrdenes from "./components/pastOrders.jsx";
import About from "./components/about.jsx";
import bootstrap from "bootstrap";
import Laundry from "./components/laundry.jsx";
import Calendar from "./calendar.jsx";
import userHome from './userHome.jsx';
import Form from './form.jsx';
import Contacto from "./components/contacto.jsx";
import Home from './userHome.jsx';
import Quienes from './components/Quienes.jsx';
import $ from 'jquery';

// import Payment from './components/payment.jsx'
// import Calendar from "./components/calendar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lon: '',
      userId: undefined,
      userName: '',
      user: null,
      account: undefined,
      userOrders: null,
      phone:'',
      address: '',
      size: '1-3 Kg',
      specialInd: '',
      service: 'Laundry',
      dates: null,
      times: '9:00am.',
      total: 10000,
      status:'aceptada',
    }
    this.getUserInfo = this.getUserInfo.bind(this);
    this.getUsersOrders = this.getUsersOrders.bind(this);
    this.authListener = this.authListener.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleTime = this.handleTime.bind(this);

  }


  hadleDayClick(day, { selected}) {
    this.setState({
      dates: selected ? undefined : day,
    });
    console.log(typeof day);
  }

  handleTime(e) {
    e.preventDefault();
    this.setState({times: e.target.value})
  }

  getUserInfo(){
    $.ajax({
      url: '/users/',
      method:'GET',
      success: (data) => {
        console.log(data, "awiwi", data);
        for (var i = 0; i < data.length; i++){
          if (data[i].email === this.state.user.email){
            console.log("user found", data[i]);
            const userInfo = data[i];
            this.setState({
              userId: usersInfo.id,
              userName:usersInfo.userName,
              phone: usersinfo.phone
            })
          }
          console.log("user assigned", this.state.userName);
        }
      },
      error:(xhr,err) => {
        console.log('la cagaste desde el fronts',err)
      }
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }



 addOrder(lat, lon, userId, address, size, specialInd, service, dates, times,total, status){
  $.ajax({
    type: "POST",
    url: "/order",
    contentType: 'appliction/json',
    data: JSON.stringify({
      lat: lat,
      lon: lon,
      userId: userId,
      address: address,
      size: size,
      specialInd: specialInd,
      service: service,
      dates: dates,
      times: times,
      total: total,
      status: status,
    }),
    success:(data)=> {
    },
    error: (xhr,status,error) => {
      console.log(error);
    }
  });
}

getUsersOrders() {
  $.ajax({
    url: '/orders',
    method:'GET',
    success: (data) => {
      console.log(data, "awiwi las orders llegaron");
      const usersOrders = [];
      for (var i = 0; i < data.length; i++){
        if (data[i].userId === this.state.userId){
          userOrders.push(data[i]);
        }
      }
      console.log(usersOrders);
      this.setState({
        userOrders: usersOrders
      });
    },
    error:(xhr,err) => {
      console.log('la cagaste desde el fronts orders',err)
     }
  }
)}


  authListener() {

  fire.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user){
      this.setState({ user });
      localStorage.setItem('user', user.uid);
    } else {
      this.setState({ user: null});
      localStorage.removeItem('user');
    }
  });
}
    componentDidMount() {
      navigator.geolocation.getCurrentPosition(locaation => {
        this.setState({
          lat: location.coords.latitude,
          lon: location.coords.longitude
        })
        // this.getUserInfo();
        //this.getUsersOrders();
      });
    }

    render () {
      return (
        <BrowserRouter>
          <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Quienes} exact />s

             <Route path="/contacto" component={Contacto} exact />s

             <Route path="/checkout" render={(props) =>
              <CheckOut {...props} state={this.state} addOrder={this.addOrder}
              addOrder={this.addOrder}/> } />

              <Route path="/MisOrdenes" render={(props) =>
                <MisOrdenes {...props} state={this.state}/> } />

              <Route path="/registro" render={(props) =>
                <Auth{...props} state={this.state} authListener={this.authListener}/> } />

              <Route path="/Form" render={(props) =>
              <Form {...props} state={this.state}  handleChange={this.handleChange} /> } />

              <Route path="/pickDay" render={(props) =>
              <Calendar {...props} state={this.state} handleDayClick={this.handleDayClick}
               handleTime={this.handleTime} /> } />

               <Route path='/micuenta' render={(props) =>
               <Home {...props} state={this.state} getUsersOrders={this.getUsersOrders}
                getUserInfo={this.getUserInfo} /> } />
                <Route path='/Aboutus' component={About} exact/>
                </Switch>
              </div>
            </BrowserRouter>
      )
    }
}

ReactDom.render(<App />, document.getElementById('app'));
