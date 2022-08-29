console.log('app.js is running')

// JSX - Javascript XML
const app = {
    title: 'Indecision Application',
    subTitle: 'This is a subtitle in a paragraph tag',
    options: []
}

const addOptions = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
}

const clearOptions = () => {
    app.options = []
    renderApp()
}

const appRoot = document.getElementById('app')

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
        <form onSubmit={addOptions}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
        </form>
            <button onClick={clearOptions}>Clear Options</button>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp()
