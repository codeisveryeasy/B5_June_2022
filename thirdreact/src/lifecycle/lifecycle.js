import React from 'react';


class Lifecycle extends React.Component {
    state = { 
        score: 8
     } 

     changeScore=()=>{
        this.setState({
            score: this.state.score + 1
        })
     }

    render() { 
        return (
            <div>
                <h1>Component lifecycle</h1>
                <p>Time: {new Date().getTime()}</p>
                <button onClick={this.changeScore}>Update score</button>  &nbsp; &nbsp;
                Score: {this.state.score}
            </div>
        );
    }

    componentWillMount(){
        console.log("component will be mounted")
        console.log(new Date().getTime());
    }

    componentDidMount(){
        console.log("component is mounted") 
        console.log(new Date().getTime());
    }

    componentWillUpdate(){
        console.log("component will update") 
        console.log(new Date().getTime());
    }

    componentDidUpdate(){
        console.log("component did update") 
        console.log(new Date().getTime());
    }

   
}
 
export default Lifecycle;