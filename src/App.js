import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 10,
      backgroundColor:'cold',
    }
  }
  incrimentTemp(){
    if (this.state.temperature === 30) return;
    this.setState({temperature: (this.state.temperature + 1)})
    if (this.state.temperature >= 15) {
      this.setState({backgroundColor: 'hot'})
    }
  }
  decrimentTemp() {
    if (this.state.temperature === 0) return;
    if (this.state.temperature < 15) {
      this.setState({backgroundColor: 'cold'})
    }
    this.setState({temperature: (this.state.temperature - 1)})
  }
  render() {
    return (
      <div>
        <Header />
        <div className='card-container'>
          <div className={`circle ${this.state.backgroundColor}`} >
            <div className='temperature'>
              {this.state.temperature}℃
            </div>
          </div>
          <div className='btn-control'>
            <button id='increase' onClick={() => this.incrimentTemp()}>+</button>
            <button id='decrease' onClick={() => this.decrimentTemp()}>-</button>
          </div>
        </div>
      </div>
    )
  }
}
export default App;