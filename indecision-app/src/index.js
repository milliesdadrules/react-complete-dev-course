// JSX JavaScript XML 

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['One','Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options': 'No Options'}</p>
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

const getLocation = (location) =>{
    if(location){
        return <p>Location: {location}</p>
    } else {
        return undefined
    }
}

let templateTwo = (
    <div>
        <h1>{ user.name ? user.name: 'Anonymous' }</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

let appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
