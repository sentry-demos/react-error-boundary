## Description
This app shows how Sentry's 'React Error Boundary' provides a fallback UI when the react component tree crashes, and provides "component stack" information on the error that gets sent up to Sentry. Example code was taken from https://docs.sentry.io/platforms/javascript/guides/react/components/errorboundary/#setting-a-fallback-function-render-props

The "component stack" spoken of here is viewable on the Sentry Issue like:
![ComponentStackLifecycleError](./component-stack-lifecycle-error.png)
## Setup
`npm install`

## Run

1. `npm run build`
2. `./node_modules/serve/bin/serve.js -s build`

The component stack info will be minified, because you have not uploaded source maps. Run `make` to take care of all run instructions and source map uploading. If this fails, then uncomment the code in componentDidMount in App.js and run `npm start` instead.

## Troubleshooting
If you'd like to use `npm start` instead, then uncomment the code in componentDidMount in App.js, and this will cause an error and the Sentry Issue will have the Component Stack shown. The fallback UI component will not render in development mode (npm start).

If you use npm run build but don't upload sourcemaps, then your Component Stack info will be minified just like your source bundle code. This is a common problem that customers may encounter:  
![ComponentStackMinified](./component-stack-minified.png)