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
        <form>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
