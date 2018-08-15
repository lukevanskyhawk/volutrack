import React, { Component } from 'react';
import VisitorList from './components/VisitorList';
import NameCheckIn from './components/CheckIn';

class Home extends Component {

  constructor() {
    super()
    this.state = {
      visitors: [
      ]
    };
  }

  checkIn = (name) => {
    this.setState({
      visitors: [
        ...this.state.visitors,
        {
          name: name,
          timeIn: '',
          classroom: '',
          visitType: ''
        }
      ]
    })
  }

  getTotalVisitors = () => this.state.visitors.length;
  // getAttendingGuests = () =>
  // getUnconfirmedGuests = () =>

  render() {
    return (
      <div className="App">
        <header>
          <h1>Volutrack</h1>
          <p>Rosamond Elementary</p>
          <NameCheckIn onSubmit={this.checkIn} />
        </header>
        <div className="main">
          <div>
            <h2>Volunteers/Visitors</h2>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Checked In:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Total Today:</td>
                <td>{this.getTotalVisitors()}</td>
              </tr>
            </tbody>
          </table>
          <VisitorList visitors={this.state.visitors} />
        </div>
      </div >
    );
  }
}

export default Home;
