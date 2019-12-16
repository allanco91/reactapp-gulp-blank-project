import * as React from "react"
import * as ReactDOM from "react-dom"

class IndexPage extends React.Component {
    render(){
        return <div>React APP</div>;
    }
}

ReactDOM.render(<IndexPage />, document.getElementById("appArea"));
