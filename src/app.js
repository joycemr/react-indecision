console.log('app.js is running')

// JSX - Javascript XML
const app = {
    title: 'Indecision Application',
    subTitle: 'This is a subtitle in a paragraph tag',
    options: ['One', 'Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
    </div>
)

const user = {
    name: 'Michael Joyce',
    age: 56,
    location: "O'Fallon, IL",
}

const getLocation = (location) => {
    if (location) {
        return <p>Location: {location}</p>
    }
}

let count = 0
const addOne = () => {
    count++
    console.log(`count: ${count}`)
}
const minusOne = () => {
    count > 0 ? count-- : count = 0
    console.log(`count: ${count}`)
}
const reset = () => {
    count = 0
    console.log(`count: ${count}`)
}

const template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(template2, appRoot)
