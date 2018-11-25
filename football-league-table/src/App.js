import React, { Component } from 'react';
import { Provider } from 'react-redux';
import FootballLeagueTableComponent from './components/footballLeagueTable/footballLeagueTableComponent';
import './App.css';

/**
 * Root component
 */
class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Provider store={this.props.store}>
          <FootballLeagueTableComponent />
        </Provider>
      </div>
    );
  }
}

export default App;