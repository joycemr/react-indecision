console.log('app.js is running')

// JSX - Javascript XML
const app = {
    title: 'Indecision Application',
    subTitle: 'This is a subtitle in a paragraph tag',
    options: []
}

const onAddOptions = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
}

const onClearOptions = () => {
    app.options = []
    renderApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById('app')

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
            <ol>
                {
                    app.options.map(option => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onAddOptions}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
            <button onClick={onClearOptions}>Clear Options</button>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp()
