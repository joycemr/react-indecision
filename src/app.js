console.log('app.js is running')

// JSX - Javascript XML
var app = {
    title: 'Indecision Application',
    subTitle: 'This is a subtitle in a paragraph tag',
    options: ['One', 'Two']
}
var template = (
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

var user = {
    name: 'Michael Joyce',
    age: 56,
    location: "O'Fallon, IL",
}

const getLocation = (location) => {
    if (location) {
        return <p>Location: {location}</p>
    }
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
