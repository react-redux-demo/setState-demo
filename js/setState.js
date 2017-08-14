class Count extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0}
    }
    handle(){
        this.setState({count:this.state.count + 1})
        console.log(this.state.count); //输出的是上一次的值，在setState中，这是一个异步处理的函数，并不是同步的，
        // console在setState后立刻执行了，所以这时候状态还没有真正变更完，所以这里取到的状态仍旧是更新前的
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