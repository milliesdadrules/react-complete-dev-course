// JSX JavaScript XML 

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer"
}

let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
)

const user = {
    name: 'James McNeil',
    age: 47,
    location: 'North Ayrshire'
}
const userName = 'James'
const userAge = 47
const userLocation = "Scotland"
let templateTwo = (
    <div>
        <h1>{ user.name }</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

let appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
