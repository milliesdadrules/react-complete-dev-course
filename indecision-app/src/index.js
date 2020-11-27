// JSX JavaScript XML 
let template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
)

let templateTwo = (
    <div>
        <h1>James McNeil</h1>
        <p>Age: 47</p>
        <p>Location: North Ayrshire</p>
    </div>
)
let userDetails = document.getElementById('user-details')
let appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot)
