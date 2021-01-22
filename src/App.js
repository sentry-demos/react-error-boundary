import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import * as Sentry from '@sentry/react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "This message is stored in a property on the component's state and it needs to be a string",
    };
  }
  /*
  * Any errors thrown in a lifecycle callback will have a componentStack
  * componentDidMount is a lifecycle callback and responsible for helping render the component tree
  */
  componentDidMount() {
    // this.iWillMakeAComponentStack()
  }

  /*
  * Errors thrown from this method will not have a componentStack, because this method is not lifecycle callback.
  * so you will not see componentStack on the Issue in Sentry
  */
  nonLifecycleMethod() {
    // this.tryMe()
  }

  render() {
    const warningText = `
    React encountered an error, but the Fallback component specified by your Sentry ErrorBoundary is now displaying, 
    rather than the crashed component tree (it was expecting a String, not an Object).
    `
    const suggestion = `
    Use a styled fallback component and message here for your customer to see, rather than letting them
    see what the React framework does when it crashes on itself!
    `

    return (
      // This 'fallback' component is what displays when the React component tree crashes on itself
      <Sentry.ErrorBoundary
              fallback={({ error, componentStack, resetError }) => (
                <React.Fragment>
                  <h3>Fallback Component</h3>
                  <div>{warningText}</div>
                  <div>{suggestion}</div>
                  
                  <h3>Error:</h3>
                  <div>{error.toString()}</div>
                  
                  <h3>Component Stack:</h3>
                  <div>{componentStack}</div>
                  
                  <br></br>
                  
                  <button
                    onClick={() => {
                      this.setState({ message: "I am a string value, and will restore the component tree from its failed state!" });
                      resetError();
                    }}>
                    Click here to reset!
                  </button>
                </React.Fragment>
              )}
            >
              <h3>Component State:</h3>
              <div>{this.state.message}</div>

              <h3>On click, this button sets an Object as a message, not a String,</h3>
              <h3>which will cause an error to occur in the React component tree:</h3>
              <button
                onClick={() => this.setState({ message: { text: "I am an object value, and 'message' expects a string. Here comes an error!" } })}
              >
                Click Me
              </button>
      </Sentry.ErrorBoundary>
    )
  }
}

export default App;
