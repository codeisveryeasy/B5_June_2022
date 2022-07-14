import React from 'react';


class Blogcontent extends React.Component {
    state = { 
        statelikes: parseInt(this.props.likes)
     } 


     addLike=()=>{
        console.log("addLike called")
        this.setState({ 
            statelikes: this.state.statelikes + 1
         } 
    )
     }

    render() { 
        return (
            <div>
                   <p>{this.props.content}</p>
                   <button onClick={this.addLike}>Like</button> 
                   {this.state.statelikes}
            </div>
         
        );
    }
}
 
export default Blogcontent;