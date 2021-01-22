/*global Sentry*/
import React, { Component } from "react";

import * as Sentry from '@sentry/react';

class ChildComponent extends Component {
    
    // has componentStack as well
    componentDidMount() {
        this.iAmAnError()
    }

    render() {
        return (
            <div>
                <p>TEXT</p>
            </div>
        )
    }
}

export default ChildComponent