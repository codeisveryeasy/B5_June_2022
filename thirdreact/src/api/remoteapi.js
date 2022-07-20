import React from 'react';
import axios from 'axios'

class RemoteAPI extends React.Component {
    state = { 
        users: []
     } 


    componentWillMount(){
        this.callApi()
    }

    callApi=()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                console.log(this.state.users)
                this.setState({
                    users: response.data
                })
                console.log(this.state.users)

            })
            .catch((error)=>{
                console.log(error)
            })

    }

    renderUsers=()=>{
       return this.state.users.map((user)=>{
        //console.log(user)
        return (
            <li key={user.id}>{user.name}</li>
        )
       })
    }

    render() { 
        return (
            <div>
                <h1>List of users: </h1>
                <ol>
                       {this.renderUsers()}
                </ol>
             
            </div>
        );
    }
}
 
export default RemoteAPI;