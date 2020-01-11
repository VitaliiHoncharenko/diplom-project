import React, {Component} from 'react';
// import logo from './logo.svg';

import './start-page.scss';

class App extends Component {

  createNewJourney() {
    alert('new');
  }

  render() {
    return (
      <div className="start-page">
        <div className="start-page__title">Hello my project</div>
        <button className="start-page__btn" onClick={this.createNewJourney}>Новая поездка</button>
      </div>
    )
  }
}

export default App;
