import React, {Component} from 'react';
import Payment from './payment.jsx';

//receipt

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.addOrder(this.props.state.lat, this.props.state.lon, this.props.state.userId,
    this.props.state.address, this.props.state.size,this.props.state.specialInd, this.props.state.service,
  this.props.state.dates.toLocaleDateString(), this.props.state.times, this.props.state.total, this.props.state.status);
  }
  render (){
      return (
        <div>
          <h2>Tu orden</h2>
          <p>Recogeremos {this.props.state.size} de ropa  </p>
          <p>el dia{this.props.state.dates.toLocaleDateString()} a las {this.props.state.times}.</p>
          <p></p>
          <p>Tu total sera de ${this.props.state.total/100}</p>
            <Payment total={this.props.state.total}/>
          </div>
      );
  }
}
export default CheckOut;
