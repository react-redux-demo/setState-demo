class Count extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0}
    }
    handle(){
        this.setState({count:this.state.count + 1})
    }
    render(){
        return <div>
            <span>{this.state.count}</span>
            <button type="button" onClick={this.handle.bind(this)}>click me</button>
        </div>
    }
}

ReactDOM.render(
    <div>
        <Count/>
    </div>,document.getElementById('content')
);