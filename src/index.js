import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as Sentry from '@sentry/react';
Sentry.init({
  dsn: "https://426a31c1b1614727b705cdece09484ff@o262702.ingest.sentry.io/5533979",
  release: process.env.REACT_APP_RELEASE,
  environment: "test",
  // debug: true
});

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={"An error has occurred"}>
      <App />
    </Sentry.ErrorBoundary>;
  </React.StrictMode>,
  document.getElementById('root')
);
