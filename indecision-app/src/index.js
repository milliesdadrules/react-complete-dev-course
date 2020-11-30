class Header extends React.Component {
    render(){
        return (
            <div>
            <h1>Indecision</h1>
            <h2>Put your life in the hads of a computer</h2>
            </div>
        )
    }
}
class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
                <p>Options Component here</p>
                <AddOption />
            </div>
        )
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        )
    }
}
const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
    </div>
)
ReactDOM.render(jsx, document.getElementById('app'))