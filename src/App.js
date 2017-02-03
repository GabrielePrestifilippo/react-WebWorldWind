import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import WorldWindow from './WorldWind.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React with WebWorldWind</h2>
                </div>
                <WorldWindow/>
            </div>
        );
    }
}

export default App;
