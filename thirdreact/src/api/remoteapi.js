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


    render() { 
        return (
            <div>
                <h1>List of users: </h1>
            </div>
        );
    }
}
 
export default RemoteAPI;