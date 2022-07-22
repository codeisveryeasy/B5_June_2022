import React from 'react';

class Contact extends React.Component {
    state = {
        visitorName:"",
        visitorEmail:""
    }

    sendInfo=()=>{
        console.log("Send button clicked!")
        //console.log(event)
        let newUser = {
            name: this.state.visitorName,
            email: this.state.visitorEmail
        }
        console.log(newUser)
    }

    captureName=(event)=>{
        console.log(event)
        console.log(event.target.value)
        this.setState({
            visitorName: event.target.value
        })
    }

    captureEmail=(event)=>{
        console.log(event)
        console.log(event.target.value)
        this.setState({
            visitorEmail: event.target.value
        })
    }

    render() {
        return (

            <div>
                <div>
                    <p>Hipsum makes for a good laugh, perhaps even more so because it’s not a coherent text as a whole. Instead, it’s basically many words thrown together to create some truly random filler text.</p>
                </div>
                <div>
                    <h2>Get in touch</h2>
                    <div>
                        <label>Name: </label>
                        <input type="text" onChange={this.captureName} id="nameid"></input>
                        <br></br>
                        <br></br>
                        <label>Email: </label>
                        <input type="text" onChange={this.captureEmail} id="emailid"></input>
                        <br></br>
                        <br></br>
                        <button onClick={this.sendInfo}>Send</button>
                    </div>
                    <br></br>
                    <div>
                        Name: {this.state.visitorName}
                        <br></br>
                        <br></br>
                        Email: {this.state.visitorEmail}
                    </div>

                </div>


            </div>

        );
    }
}

export default Contact;