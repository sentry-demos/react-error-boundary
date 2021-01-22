import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import * as Sentry from '@sentry/react';
import ChildComponent from './ChildComponent';


class App extends Component {

  /*
  * componentDidMount is a lifecycle call back, part of component tree, so you will see componentStack on the issue in Sentry
  * capturing a message because we don't want to terminate the entire program
  */
  componentDidMount() {
    // componentStack present on Issue in Sentry
    // this.functionNotDefined()
  }

  /*
  * myMethod and the following error have nothing to do with the component tree, 
  * so you will not see componentStack on the Issue in Sentry
  */
  myMethod() {
    // componentStack not present on Issue in Sentry
    this.notDefined()
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.myMethod}>No componentTree</button>
        </header>
        <ChildComponent/>
      </div>
    );
  }
}

export default App;

// Sentry.captureMessage("react-error-boundary app")

{/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */}