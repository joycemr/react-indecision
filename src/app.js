console.log('app.js is running')

// JSX - Javascript XML
var template = <h1>This is JSX from app translated with babel</h1>
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
